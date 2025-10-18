import type { JSX } from 'react'

// App n’est plus le conteneur des routes (gérées via RouterProvider dans main.tsx).
// On le garde comme composant placeholder au cas où d’autres fichiers l’importent encore.
export default function App(): JSX.Element {
  return <></>
}
