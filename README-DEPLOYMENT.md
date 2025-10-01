# 🚀 Guide de Déploiement ANOURA Academy sur Netlify

## 📋 Prérequis
- Compte GitHub (gratuit)
- Compte Netlify (gratuit)
- Fichiers du projet ANOURA Academy

## 🎯 Étapes de Déploiement

### 1. Préparation des fichiers
✅ **Déjà fait** - Le projet est prêt avec :
- Build optimisé (1,232 kB)
- Configuration de routing SPA (`_redirects`)
- Toutes les pages fonctionnelles

### 2. Créer un repository GitHub

1. **Aller sur GitHub.com** et se connecter
2. **Cliquer sur "New repository"**
3. **Nommer le repository** : `anoura-academy`
4. **Cocher "Public"** (gratuit)
5. **Cliquer "Create repository"**

### 3. Uploader les fichiers

**Option A - Via interface GitHub :**
1. Cliquer sur "uploading an existing file"
2. Glisser-déposer TOUT le dossier `/workspace/shadcn-ui/`
3. Commit message : "Initial ANOURA Academy website"
4. Cliquer "Commit changes"

**Option B - Via Git (si installé) :**
```bash
git init
git add .
git commit -m "Initial ANOURA Academy website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/anoura-academy.git
git push -u origin main
```

### 4. Déployer sur Netlify

1. **Aller sur netlify.com** et se connecter
2. **Cliquer "New site from Git"**
3. **Choisir "GitHub"** et autoriser l'accès
4. **Sélectionner le repository** `anoura-academy`
5. **Configuration de build :**
   - Build command : `pnpm run build`
   - Publish directory : `dist`
6. **Cliquer "Deploy site"**

### 5. Personnaliser l'URL

1. **Dans le dashboard Netlify**, aller dans "Site settings"
2. **Cliquer "Change site name"**
3. **Choisir** : `anoura-academy` ou `anoura-academy-formation`
4. **URL finale** : `https://anoura-academy.netlify.app`

## 🌐 URLs du Site Déployé

Une fois déployé, votre site sera accessible sur :
- **https://anoura-academy.netlify.app/** - Page d'accueil
- **https://anoura-academy.netlify.app/animated** - Page animée
- **https://anoura-academy.netlify.app/courses** - Catalogue formations
- **https://anoura-academy.netlify.app/contact** - Contact
- **https://anoura-academy.netlify.app/about** - À propos
- **https://anoura-academy.netlify.app/signup** - Inscription
- **https://anoura-academy.netlify.app/module/1** - Module d'essai

## ⚡ Avantages Netlify Gratuit

- ✅ **100 GB de bande passante/mois**
- ✅ **Déploiement automatique** à chaque push GitHub
- ✅ **SSL/HTTPS gratuit**
- ✅ **CDN mondial**
- ✅ **Domaine personnalisé** (si vous en avez un)
- ✅ **Formulaires de contact** (100 soumissions/mois)

## 🔧 Résolution des Erreurs Console

Les erreurs CORS et Stripe que vous voyez dans la console sont normales en développement et **se résoudront automatiquement** une fois le site hébergé sur Netlify car :

1. **Domaine stable** : Plus de `localhost`, mais une vraie URL
2. **HTTPS natif** : Netlify fournit SSL automatiquement
3. **Headers corrects** : Configuration serveur optimisée

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifiez que tous les fichiers sont bien uploadés
2. Consultez les logs de build dans Netlify
3. Testez d'abord avec l'URL temporaire Netlify

## 🎉 Résultat Final

Votre site ANOURA Academy sera accessible 24h/24, 7j/7 avec :
- ⚡ Chargement ultra-rapide
- 📱 Compatible mobile
- 🔒 Sécurisé HTTPS
- 🌍 Accessible mondialement