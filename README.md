# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

Cette application est un projet Vite + React + TypeScript (template de base).

---

Petit guide pour démarrer rapidement

Structure minimale du projet utilisée ici :

```
anoura-academy/
 └── src/
      ├── App.tsx
      ├── main.tsx
      ├── lib/
      │    └── supabase.ts
      ├── pages/
      │    └── PageAccueil.tsx
      └── styles/
           └── mgx.css (optionnel)
```

Prérequis
- Node.js 18+ (ou version compatible avec Vite)
- npm ou yarn

Installer les dépendances
```powershell
npm install
```

Installer dompurify (si nécessaire)
```powershell
npm install dompurify
npm install --save-dev @types/dompurify
```

Variables d'environnement
Créez un fichier `.env` ou `.env.local` à la racine et ajoutez :

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Commandes utiles
- Lancer le serveur de développement :
```powershell
npm run dev
```
- Construire pour la production :
```powershell
npm run build
```
- Prévisualiser la build :
```powershell
npm run preview
```

Remarques spécifiques au projet
- `src/lib/supabase.ts` utilise `import.meta.env.VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`.
- `PageAccueil` récupère du HTML depuis Supabase et utilise `DOMPurify` pour le sanitizer avant injection dans `dangerouslySetInnerHTML`.
- Si vous utilisez TypeScript, installez `@types/dompurify` pour les déclarations de types.

---

Le reste du README d'origine (configuration ESLint/Vite avancée) a été conservé ci-dessous pour référence :

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
