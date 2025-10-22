import { useState, type JSX } from 'react';
import { fetchRandomJoke, type Joke } from '../lib/jokeService';
import '../styles/jokeGenerator.css';

export default function JokeGenerator(): JSX.Element {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  const getNewJoke = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    setShowPunchline(false);
    
    try {
      const newJoke = await fetchRandomJoke();
      setJoke(newJoke);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  const revealPunchline = (): void => {
    setShowPunchline(true);
  };

  return (
    <div className="joke-generator">
      <div className="joke-generator-header">
        <h2>Random Joke Generator</h2>
        <p className="joke-generator-subtitle">Need a laugh? Get a random joke!</p>
      </div>

      <div className="joke-generator-content">
        {error && (
          <div className="joke-error">
            <p>{error}</p>
          </div>
        )}

        {joke && !error && (
          <div className="joke-display">
            <span className="joke-type-badge">{joke.type}</span>
            <div className="joke-setup">
              <p>{joke.setup}</p>
            </div>
            
            {showPunchline ? (
              <div className="joke-punchline">
                <p>{joke.punchline}</p>
              </div>
            ) : (
              <button 
                className="joke-reveal-button"
                onClick={revealPunchline}
                aria-label="Reveal punchline"
              >
                Show Punchline
              </button>
            )}
          </div>
        )}

        {!joke && !error && !loading && (
          <div className="joke-placeholder">
            <p>Click the button below to get a random joke!</p>
          </div>
        )}
      </div>

      <div className="joke-generator-actions">
        <button 
          className="joke-button"
          onClick={getNewJoke}
          disabled={loading}
          aria-label="Get new joke"
        >
          {loading ? 'Loading...' : joke ? 'Get Another Joke' : 'Get a Joke'}
        </button>
      </div>

      <footer className="joke-generator-footer">
        <p>Powered by Official Joke API</p>
      </footer>
    </div>
  );
}
