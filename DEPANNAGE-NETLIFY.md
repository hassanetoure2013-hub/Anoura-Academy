# 🔧 Dépannage Déploiement Netlify - ANOURA Academy

## 🚨 Problème Identifié
Site créé sur Netlify mais déploiement en échec ou en attente

## 🔍 Solutions par Ordre de Priorité

### Solution 1: Vérifier Configuration Build Netlify
1. **Dans Netlify Dashboard** → votre site
2. **Aller à "Site settings"** → "Build & deploy"
3. **Vérifier ces paramètres EXACTS :**
   ```
   Build command: npm run build
   Publish directory: dist
   Base directory: (laisser vide)
   ```

### Solution 2: Forcer un Nouveau Déploiement
1. **Dans Netlify Dashboard** → "Deploys"
2. **Cliquer "Trigger deploy"** → "Deploy site"
3. **Attendre 3-5 minutes** et surveiller les logs

### Solution 3: Configuration Alternative
Si échec, essayer cette config :
```
Build command: npm install && npm run build
Publish directory: dist
Node version: 18
```

### Solution 4: Vérifier les Logs d'Erreur
1. **Dans "Deploys"** → cliquer sur le deploy en échec
2. **Lire les logs d'erreur** (section rouge)
3. **Problèmes courants :**
   - `pnpm not found` → Changer vers `npm run build`
   - `Permission denied` → Vérifier les droits GitHub
   - `Module not found` → Problème de dépendances

## 🎯 Configuration Recommandée FINALE
```
Repository: hassanetoure2013-hub/Anoura-Academy
Branch: main
Build command: npm run build
Publish directory: dist
Base directory: (vide)
Node version: 18
```

## 📞 Si Toujours Bloqué
1. **Supprimer le site Netlify actuel**
2. **Recréer avec "New site from Git"**
3. **Utiliser EXACTEMENT la config ci-dessus**

## ✅ Test Final
Une fois déployé :
- Site accessible avec URL temporaire
- Changer le nom vers `anoura-academy`
- URL finale : https://anoura-academy.netlify.app

---
**Suivez ces étapes dans l'ordre. Quel est le message d'erreur exact que vous voyez ?**