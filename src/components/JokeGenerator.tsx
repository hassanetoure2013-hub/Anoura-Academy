import React, { useEffect, useState } from 'react';
import { fetchRandomJoke, Joke } from '../services/jokeService';
import '../styles/jokeGenerator.css';

function copyToClipboardRobust(text: string): Promise<void> {
  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  // Fallback to legacy execCommand approach
  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      // Avoid showing the textarea to the user
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      textarea.setAttribute('aria-hidden', 'true');

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      // execCommand returns boolean in some browsers; wrap in try/catch
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (ok) {
        resolve();
      } else {
        reject(new Error('execCommand failed'));
      }
    } catch (err) {
      reject(err);
    }
  });
}

export default function JokeGenerator(): JSX.Element {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function loadJoke() {
    setLoading(true);
    setError(null);
    setCopied(false);
    try {
      const j = await fetchRandomJoke();
      setJoke(j);
    } catch (err: any) {
      setError(err?.message || 'Unknown error fetching joke');
      setJoke(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadJoke();
  }, []);

  async function handleCopy() {
    const text =
      joke && 'joke' in joke ? joke.joke : joke ? `${joke.setup}\n${joke.punchline}` : '';
    if (!text) return;

    try {
      await copyToClipboardRobust(text);
      setCopied(true);
      // small UX: clear the indicator after 2s
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Copy failed — please copy manually');
      setCopied(false);
    }
  }

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
        <div className="jg-error" role="alert">Error: {error}</div>
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
          onClick={handleCopy}
          title="Copy joke"
          aria-pressed={copied}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </section>
  );
}