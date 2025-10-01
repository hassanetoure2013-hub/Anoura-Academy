# 🔧 Solution Erreur Git Netlify - "refs/heads/main n'existe pas"

## 🚨 **Erreur Identifiée :**
```
git ref refs/heads/main n'existe pas
Échec de la construction : Échec de la préparation du dépôt
```

## 🔍 **Cause du Problème :**
Netlify cherche la branche "main" mais votre repository utilise "master"

## ✅ **Solution Immédiate :**

### Option 1: Changer la Branche dans Netlify (RECOMMANDÉ)
1. **Dans Netlify Dashboard** → votre site
2. **Aller à "Site settings"** → "Build & deploy"
3. **Section "Repository"** → cliquer "Edit settings"
4. **Changer "Branch to deploy"** de `main` vers `master`
5. **Sauvegarder** et redéployer

### Option 2: Renommer master en main sur GitHub
1. **Aller sur GitHub** : https://github.com/hassanetoure2013-hub/Anoura-Academy.git
2. **Cliquer "Settings"** (dans le repository)
3. **Section "General"** → "Default branch"
4. **Cliquer le crayon** à côté de "master"
5. **Changer vers "main"** et confirmer

## 🚀 **Configuration Netlify Finale :**
```
Repository: hassanetoure2013-hub/Anoura-Academy
Branch: master (ou main si renommé)
Build command: npm run build
Publish directory: dist
```

## 📞 **Test de Validation :**
1. **Trigger deploy** dans Netlify
2. **Vérifier les logs** - plus d'erreur Git
3. **Build réussi** en 2-3 minutes
4. **Site accessible** avec URL temporaire

## 🎯 **Prochaines Étapes :**
Une fois déployé :
- Changer le nom du site vers `anoura-academy`
- URL finale : https://anoura-academy.netlify.app

---
**Recommandation : Utilisez l'Option 1 (plus simple et rapide)**