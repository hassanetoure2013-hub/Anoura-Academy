param(
    [ValidateSet('vercel', 'netlify', 'static')]
    [string]$Target = 'static',
    [switch]$Seed
)

$ErrorActionPreference = 'Stop'

function Invoke-Step {
    param(
        [string]$Label,
        [scriptblock]$Action
    )

    Write-Host "==> $Label" -ForegroundColor Cyan
    & $Action
}

Invoke-Step -Label 'Vérification des variables Supabase' -Action {
    if (-not $env:VITE_SUPABASE_URL -or -not $env:VITE_SUPABASE_ANON_KEY) {
        Write-Warning 'Variables VITE_SUPABASE_URL et/ou VITE_SUPABASE_ANON_KEY manquantes. Le fallback React sera utilisé.'
    }
    else {
        Write-Host 'Variables Supabase présentes.' -ForegroundColor Green
    }
}

Invoke-Step -Label 'Installation des dépendances npm' -Action {
    npm install | Out-Host
}

Invoke-Step -Label 'Build Vite (npm run build)' -Action {
    npm run build | Out-Host
}

if ($Seed) {
    Invoke-Step -Label 'Reseed Supabase (supabase/pages.seed.sql)' -Action {
        if (Get-Command supabase -ErrorAction SilentlyContinue) {
            supabase db reset --seed supabase/pages.seed.sql | Out-Host
        }
        else {
            throw 'Supabase CLI introuvable. Installez-la via https://supabase.com/docs/guides/cli avant d''utiliser --Seed.'
        }
    }
}

switch ($Target) {
    'vercel' {
        Invoke-Step -Label 'Déploiement Vercel (--prebuilt --prod)' -Action {
            if (Get-Command vercel -ErrorAction SilentlyContinue) {
                vercel deploy --prebuilt --prod | Out-Host
            }
            else {
                throw 'Vercel CLI introuvable. Installez-la via npm install -g vercel.'
            }
        }
    }
    'netlify' {
        Invoke-Step -Label 'Déploiement Netlify (--prod --dir dist)' -Action {
            if (Get-Command netlify -ErrorAction SilentlyContinue) {
                netlify deploy --dir dist --prod | Out-Host
            }
            else {
                throw 'Netlify CLI introuvable. Installez-la via npm install -g netlify-cli.'
            }
        }
    }
    default {
        Invoke-Step -Label 'Préparation du bundle statique (dist.zip)' -Action {
            $zipPath = Join-Path -Path (Get-Location) -ChildPath 'dist.zip'
            if (Test-Path $zipPath) {
                Remove-Item $zipPath -Force
            }
            Compress-Archive -Path (Join-Path 'dist' '*') -DestinationPath $zipPath
            Write-Host "Archive créée : $zipPath" -ForegroundColor Green
        }
    }
}

Write-Host 'Déploiement terminé.' -ForegroundColor Green
