// Simple service that fetches a random joke from an external API.
// Tries icanhazdadjoke (single-line) first, then falls back to Official Joke API.
// Returns either { joke } or { setup, punchline } shapes.

export type DadJoke = { id?: string; joke: string };
export type SetupPunchlineJoke = { id?: number; setup: string; punchline: string };
export type Joke = DadJoke | SetupPunchlineJoke;

async function tryIcanhaz(): Promise<DadJoke | null> {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json', 'User-Agent': 'Anoura-Academy/JokeGenerator' },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json && json.joke) return { id: json.id, joke: json.joke };
  } catch {
    // ignore and fallback
  }
  return null;
}

async function tryOfficialJoke(): Promise<SetupPunchlineJoke> {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke', {
    headers: { 'User-Agent': 'Anoura-Academy/JokeGenerator' },
  });
  if (!res.ok) {
    throw new Error(`Official Joke API failed: ${res.status}`);
  }
  const json = await res.json();
  // expected shape { id, type, setup, punchline }
  return { id: json.id, setup: json.setup, punchline: json.punchline };
}

export async function fetchRandomJoke(timeoutMs = 8000): Promise<Joke> {
  // Simple timeout wrapper
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Try dad joke first
    const dad = await tryIcanhaz();
    if (dad) return dad;
    // Fallback to official joke
    return await tryOfficialJoke();
  } catch (err) {
    throw new Error((err as Error).message || 'Failed to fetch joke');
  } finally {
    clearTimeout(id);
  }
}
