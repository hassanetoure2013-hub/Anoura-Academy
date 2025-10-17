# MGX React App

Application Vite + React dédiée au site MGX. Le contenu est chargé depuis Supabase quand les variables d'environnement sont configurées, sinon un fallback React stylé prend le relais.

## Structure principale

```text
anoura-academy/
 └── src/
      ├── App.tsx                 # Déclaration des routes MGX (React Router)
      ├── main.tsx                # Point d'entrée + BrowserRouter
      ├── components/
      │    └── mgx/
      │         ├── content.ts    # Données fallback locales
      │         ├── Fallback.tsx  # Page MGX paramétrable
      │         ├── Layout.tsx    # Layout commun (nav + outlet)
      │         └── Nav.tsx       # Navigation entre les pages MGX
      ├── lib/supabase.ts         # Client Supabase optionnel
      ├── pages/
      │    ├── MGXPage.tsx        # Récupération Supabase + fallback
      │    ├── NotFound.tsx       # Fallback pour routes inconnues
      │    └── PageAccueil.tsx    # Wrapper pour le slug `accueil`
      └── styles/mgx.css          # Styles globaux MGX
```

## Installation

```powershell
npm install
# ou
yarn install
```

Plugins ajoutés automatiquement :

- `react-router-dom` (+ types) pour le routage.
- `dompurify` (+ types) pour sécuriser le HTML issu de Supabase.
- `@supabase/supabase-js` pour la récupération des pages dynamiques.

## Variables d'environnement

Créer un fichier `.env` (ou `.env.local`) à la racine :

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
```

Si les variables d'environnement sont absentes, l'application affiche automatiquement le fallback React contenu dans `src/components/mgx/content.ts`.

## Lancer l'application

```powershell
# Mode développement (Hot Reload)
npm run dev

# Build de production
npm run build

# Aperçu de la build
npm run preview
```

Routes disponibles :

- `/accueil`
- `/services`
- `/mentoring`
- `/contact`
Toute route non listée affiche une page "Not Found" avec le fallback MGX.

## Supabase : table `pages`

Structure minimale :

```sql
create table if not exists pages (
      id uuid primary key default gen_random_uuid(),
      slug text unique not null,
      contenu_html text not null,
      created_at timestamp with time zone default now()
);
```

Le fichier `supabase/pages.seed.sql` fournit un jeu de données exemple pour les quatre pages MGX. Il peut être exécuté via la CLI Supabase :

```bash
supabase db reset --seed supabase/pages.seed.sql
```

### Cache côté client

- `src/pages/MGXPage.tsx` mémorise les réponses Supabase pendant 5 minutes.
- La navigation entre pages MGX évite ainsi les requêtes redondantes dans une même session.
- En cas d'expiration ou d'échec, le fallback local reprend et la requête sera rejouée.

## Tests et QA

- `npm run build` garantit la compilation TypeScript et Vite.
- Ajoutez des snapshots/tests E2E selon vos besoins (non fournis par défaut).

## Aller plus loin

- Adapter `src/components/mgx/content.ts` si vous souhaitez changer les textes fallback.
- Brancher d'autres slugs MGX : ajouter le contenu dans `content.ts`, renseigner la page dans Supabase, et la navigation se mettra à jour automatiquement.
- Intégrer une authentification Supabase si certaines pages doivent être protégées.

## Déploiement

### Préparatifs

- Vérifier que `npm run build` passe localement et que les routes MGX fonctionnent avec et sans Supabase.
- Renseigner `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` dans les variables d'environnement de la plateforme cible.
- S'assurer que la table `pages` Supabase contient les slugs requis (`accueil`, `services`, `mentoring`, `contact`) ou exécuter `supabase/pages.seed.sql`.

### Vercel

- Importer le repo dans Vercel, sélectionner le framework `Vite`.
- Ajouter les deux variables d'environnement dans l'onglet **Environment Variables**.
- Déployer : Vercel installe automatiquement les dépendances puis lance `npm run build` et `npm run preview`.

### Déploiement manuel (FTP / S3)

- Exécuter `npm run build` en local.
- Uploader le contenu de `dist/` sur l'hébergement statique.
- Ajouter une règle de réécriture vers `index.html` pour supporter React Router (ex. fichier `_redirects` ou règle CloudFront).

### Script CLI maison

Un script PowerShell est disponible pour enchaîner build et déploiement : `scripts/deploy.ps1`.

```powershell
# Exemples
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1 -Target vercel
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1 -Target netlify -Seed
```

Paramètres :

- `-Target` : `vercel`, `netlify` ou `static` (défaut). Le mode `static` produit `dist.zip`.
- `-Seed` : exécute `supabase db reset --seed supabase/pages.seed.sql` si la CLI est installée.

Le script vérifie la présence des variables Supabase et des CLI (`vercel`, `netlify`, `supabase`).

### CI/CD GitHub Actions

Un workflow automatisé (`.github/workflows/deploy.yml`) construit l'application à chaque push sur `main` puis déploie sur Vercel si les secrets requis sont fournis.

- Secrets Supabase : `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (nécessaires au build si vous ciblez Supabase).
- Secrets Vercel : `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` pour exécuter `vercel deploy --prebuilt --prod`.
- L'artifact `dist` est toujours publié pour téléchargement rapide.
- Le workflow est aussi exécutable manuellement via l'interface Actions (`Run workflow`).

