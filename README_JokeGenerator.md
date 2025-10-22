# Random Joke Generator (usage)

Add the component to your application (example for a React + Vite + TypeScript project):

1. Put files at:
   - src/services/jokeService.ts
   - src/components/JokeGenerator.tsx
   - src/styles/jokeGenerator.css

2. Import and use in your App (example src/App.tsx):

```tsx
import React from 'react';
import JokeGenerator from './components/JokeGenerator';
import './styles/jokeGenerator.css';

function App() {
  return (
    <div>
      <JokeGenerator />
    </div>
  );
}

export default App;
```

3. Install deps and run:
- npm install
- npm run dev

Notes:
- This component uses public APIs:
  - https://icanhazdadjoke.com/ (single-line jokes; requires Accept: application/json)
  - https://official-joke-api.appspot.com/random_joke (setup + punchline)
- No API key required. For production / rate-limit protection, consider proxying via your server or caching responses.
