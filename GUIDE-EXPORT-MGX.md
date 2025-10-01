# 📥 Guide Export MGX vers GitHub - ANOURA Academy

## 🎯 **Option B : Export Manuel depuis MGX**

### Étape 1: Exporter depuis MGX
1. **Cliquer sur "Share"** (coin supérieur droit de MGX)
2. **Cliquer "Export"** pour télécharger tous les fichiers
3. **Sauvegarder le ZIP** sur votre ordinateur
4. **Extraire les fichiers** dans un dossier local

### Étape 2: Pousser sur GitHub (Terminal Local)
```bash
# Naviguer vers le dossier extrait
cd chemin/vers/votre/dossier-anoura-academy

# Initialiser Git (si nécessaire)
git init
git remote add origin https://github.com/hassanetoure2013-hub/Anoura-Academy.git

# Ajouter tous les fichiers
git add .
git commit -m "Complete ANOURA Academy LMS - All features included"

# Pousser vers GitHub
git push -u origin main
```

### Étape 3: Vérifier GitHub
- **Aller sur** : https://github.com/hassanetoure2013-hub/Anoura-Academy
- **Vérifier** que tous les dossiers sont visibles :
  - `src/` (components, pages, contexts)
  - `public/` (assets, images)
  - `package.json`
  - `README.md`

### Étape 4: Configurer Netlify
```
Repository: hassanetoure2013-hub/Anoura-Academy
Branch: main
Build command: npm run build
Publish directory: dist
Node version: 18
```

### Étape 5: Déployer
1. **Dans Netlify** → "Deploys" → "Trigger deploy"
2. **Attendre 3-5 minutes**
3. **Site déployé** → Changer nom vers `anoura-academy`

## 🎯 **Fichiers Importants à Vérifier :**
- ✅ `src/pages/AnimatedHomepage.tsx` - Page d'accueil
- ✅ `src/pages/SignUp.tsx` - Inscription
- ✅ `src/pages/MemberArea.tsx` - Espace membre
- ✅ `src/data/courseData.ts` - Données cours
- ✅ `package.json` - Dépendances

---
**Une fois exporté et poussé, votre site sera déployable sur Netlify !**