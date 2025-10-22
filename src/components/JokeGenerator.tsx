import { useEffect, useState } from 'react';
import { fetchRandomJoke, type Joke } from '../services/jokeService';
import '../styles/jokeGenerator.css';

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadJoke() {
    setLoading(true);
    setError(null);
    try {
      const j = await fetchRandomJoke();
      setJoke(j);
    } catch (err) {
      setError((err as Error)?.message || 'Unknown error fetching joke');
      setJoke(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadJoke();
  }, []);

  function renderJoke() {
    if (!joke) return null;
    if ('joke' in joke) {
      return <p className="jg-text" data-testid="joke-text">{joke.joke}</p>;
    }
    return (
      <div className="jg-setup-punchline" data-testid="joke-setup-punchline">
        <p className="jg-setup">{joke.setup}</p>
        <p className="jg-punchline">{joke.punchline}</p>
      </div>
    );
  }

  return (
    <section className="jg-container" role="region" aria-label="Random joke generator">
      <h3 className="jg-title">Random Joke Generator</h3>

      {loading ? (
        <div className="jg-loading">Loading...</div>
      ) : error ? (
        <div className="jg-error">Error: {error}</div>
      ) : (
        <div className="jg-joke">{renderJoke()}</div>
      )}

      <div className="jg-controls">
        <button
          className="jg-button"
          onClick={loadJoke}
          disabled={loading}
          aria-disabled={loading}
        >
          {loading ? 'Fetching...' : 'New joke'}
        </button>

        <button
          className="jg-copy"
          onClick={async () => {
            const text =
              joke && 'joke' in joke ? joke.joke : joke ? `${joke.setup}\n${joke.punchline}` : '';
            if (!text) return;
            try {
              await navigator.clipboard.writeText(text);
            } catch {
              // fallback: not implemented here
            }
          }}
          title="Copy joke"
        >
          Copy
        </button>
      </div>
    </section>
  );
}
