# Random Joke Generator Component

A React component that fetches and displays random jokes from the Official Joke API with an interactive reveal mechanism for punchlines.

## Features

- 🎭 Fetches random jokes from a public API
- 🎨 Beautiful gradient UI with smooth animations
- 💫 Interactive punchline reveal button
- 🔄 Loading states for better UX
- ❌ Error handling and user feedback
- 📱 Fully responsive design
- ♿ Accessible with ARIA labels

## Files

### Component Structure

```
src/
├── components/
│   ├── JokeGenerator.tsx       # Main component
│   └── JokeGenerator.README.md # This documentation
├── lib/
│   └── jokeService.ts          # API service layer
└── styles/
    └── jokeGenerator.css       # Component styles
```

## Usage

### Basic Usage

Import and use the component in your React application:

```tsx
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <div>
      <JokeGenerator />
    </div>
  );
}
```

### Integration Example

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JokeGenerator from './components/JokeGenerator';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JokeGenerator />
  </StrictMode>
);
```

## Component API

### JokeGenerator

The main component that renders the joke generator interface.

**Props:** None (self-contained component)

**State:**
- `joke`: Current joke object (Joke | null)
- `loading`: Loading state (boolean)
- `error`: Error message (string | null)
- `showPunchline`: Punchline visibility (boolean)

## Service API

### jokeService.ts

#### `fetchRandomJoke(): Promise<Joke>`

Fetches a random joke from the Official Joke API.

**Returns:** Promise that resolves to a Joke object

**Throws:** Error if the API request fails

**Example:**
```typescript
import { fetchRandomJoke } from './lib/jokeService';

async function getJoke() {
  try {
    const joke = await fetchRandomJoke();
    console.log(joke.setup);
    console.log(joke.punchline);
  } catch (error) {
    console.error('Failed to fetch joke:', error);
  }
}
```

### Joke Interface

```typescript
interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
```

## Styling

The component uses CSS modules with the following class structure:

- `.joke-generator` - Main container
- `.joke-generator-header` - Header section
- `.joke-generator-content` - Content area
- `.joke-display` - Joke display card
- `.joke-setup` - Setup text container
- `.joke-punchline` - Punchline text container
- `.joke-button` - Action button
- `.joke-reveal-button` - Punchline reveal button

### Customization

To customize the styles, modify `src/styles/jokeGenerator.css`:

```css
/* Change gradient colors */
.joke-generator {
  background: linear-gradient(135deg, #your-color 0%, #your-color 100%);
}

/* Adjust button colors */
.joke-button {
  background: #your-color;
  color: #your-text-color;
}
```

## User Flow

1. User sees the joke generator component with a "Get a Joke" button
2. User clicks the button to fetch a random joke
3. Component displays the joke setup (question/statement)
4. User clicks "Show Punchline" to reveal the answer
5. Punchline is displayed with animation
6. User can click "Get Another Joke" to fetch a new joke

## Error Handling

The component gracefully handles errors:

- Network failures
- API unavailability
- Invalid API responses

Error messages are displayed in a user-friendly format.

## API Information

**API Endpoint:** https://official-joke-api.appspot.com/random_joke

**Response Format:**
```json
{
  "id": 1,
  "type": "general",
  "setup": "What do you call a bear with no teeth?",
  "punchline": "A gummy bear!"
}
```

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text for readability
- Focus states on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading of jokes
- Efficient state management
- Minimal re-renders
- Lightweight CSS animations

## Future Enhancements

Potential improvements:

- [ ] Joke categories filter
- [ ] Favorite jokes collection
- [ ] Share joke functionality
- [ ] Dark mode support
- [ ] Multiple joke APIs support
- [ ] Offline caching
- [ ] Joke history

## License

This component is part of the Anoura Academy project.

## Credits

- Jokes provided by [Official Joke API](https://github.com/15Dkatz/official_joke_api)
- UI design inspired by modern React component patterns
