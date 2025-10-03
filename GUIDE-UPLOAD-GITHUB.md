# 📤 Guide Upload Fichiers Téléchargés sur GitHub

## 🎯 **Méthode 1 : Interface Web GitHub (Plus Simple)**

### Étape 1: Aller sur GitHub
1. **Ouvrir** : https://github.com/hassanetoure2013-hub/Anoura-Academy
2. **Cliquer** sur "uploading an existing file" ou "Add file" → "Upload files"

### Étape 2: Upload par Drag & Drop
1. **Extraire** le ZIP téléchargé depuis MGX
2. **Sélectionner TOUS les fichiers** du dossier extrait
3. **Glisser-déposer** directement dans la zone GitHub
4. **Attendre** que tous les fichiers se chargent
5. **Commit message** : "Add complete ANOURA Academy LMS"
6. **Cliquer** "Commit changes"

## 🎯 **Méthode 2 : Terminal Local (Plus Technique)**

### Étape 1: Préparer le Dossier
```bash
# Créer un nouveau dossier
mkdir anoura-academy-local
cd anoura-academy-local

# Extraire le ZIP téléchargé ici
# (utiliser l'explorateur de fichiers)
```

### Étape 2: Initialiser Git
```bash
# Initialiser Git
git init
git remote add origin https://github.com/hassanetoure2013-hub/Anoura-Academy.git

# Configurer Git (si nécessaire)
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"
```

### Étape 3: Pousser les Fichiers
```bash
# Ajouter tous les fichiers
git add .

# Créer le commit
git commit -m "Add complete ANOURA Academy LMS - All features included"

# Pousser vers GitHub (peut demander authentification)
git push -u origin main
```

## 🎯 **Méthode 3 : GitHub Desktop (Interface Graphique)**

### Étape 1: Télécharger GitHub Desktop
1. **Aller sur** : https://desktop.github.com/
2. **Télécharger** et installer
3. **Se connecter** avec votre compte GitHub

### Étape 2: Cloner le Repository
1. **File** → "Clone repository"
2. **Sélectionner** : `hassanetoure2013-hub/Anoura-Academy`
3. **Choisir** un dossier local

### Étape 3: Copier les Fichiers
1. **Extraire** le ZIP de MGX
2. **Copier TOUS les fichiers** dans le dossier cloné
3. **GitHub Desktop** va détecter les changements
4. **Commit** avec message : "Add complete ANOURA Academy LMS"
5. **Push origin**

## ✅ **Vérification Finale**
Après upload, vérifier sur GitHub que vous voyez :
- 📁 `src/` (components, pages, contexts)
- 📁 `public/` (assets, images)  
- 📄 `package.json`
- 📄 `README.md`
- 📄 `index.html`

---
**Recommandation : Utilisez la Méthode 1 (Interface Web) - c'est le plus simple !**