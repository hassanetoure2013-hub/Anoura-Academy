// Simple service with retry/backoff and logs
export type DadJoke = { id?: string; joke: string };
export type SetupPunchlineJoke = { id?: number; setup: string; punchline: string };
export type Joke = DadJoke | SetupPunchlineJoke;

async function fetchWithTimeout(input: RequestInfo, init?: RequestInit, timeoutMs = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(input, { ...init, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function tryIcanhaz(): Promise<DadJoke | null> {
  console.debug('[jokeService] tryIcanhaz start');
  try {
    const res = await fetchWithTimeout('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json', 'User-Agent': 'Anoura-Academy/JokeGenerator' } }, 4000);
    if (!res || !res.ok) {
      console.warn('[jokeService] icanhazdadjoke not ok', res && res.status);
      return null;
    }
    const json = await res.json();
    console.debug('[jokeService] icanhazdadjoke success');
    if (json && json.joke) return { id: json.id, joke: json.joke };
  } catch (e) {
    console.warn('[jokeService] icanhazdadjoke failed', e);
  }
  return null;
}

async function tryOfficialJoke(): Promise<SetupPunchlineJoke> {
  console.debug('[jokeService] tryOfficialJoke start');
  const res = await fetchWithTimeout('https://official-joke-api.appspot.com/random_joke', { headers: { 'User-Agent': 'Anoura-Academy/JokeGenerator' } }, 4000);
  if (!res || !res.ok) {
    console.error('[jokeService] official-joke-api not ok', res && res.status);
    throw new Error(`Official Joke API failed: ${res ? res.status : 'no response'}`);
  }
  const json = await res.json();
  console.debug('[jokeService] official-joke-api success');
  return { id: json.id, setup: json.setup, punchline: json.punchline };
}

async function retry<T>(fn: () => Promise<T>, attempts = 3, baseDelay = 300): Promise<T> {
  let lastErr: any;
  for (let i = 0; i < attempts; i++) {
    try {
      if (i > 0) console.info(`[jokeService] retry attempt ${i + 1}`);
      return await fn();
    } catch (e) {
      lastErr = e;
      const delay = baseDelay * Math.pow(2, i);
      console.warn(`[jokeService] attempt ${i + 1} failed, backing off ${delay}ms`, e);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

export async function fetchRandomJoke(): Promise<Joke> {
  console.info('[jokeService] fetchRandomJoke start');
  // Try icanhaz with retries, then fallback to official joke
  try {
    const dad = await retry(() => tryIcanhaz(), 2, 200);
    if (dad) return dad;
  } catch (e) {
    console.warn('[jokeService] icanhaz retries exhausted', e);
  }

  // Last resort: official joke with retry
  try {
    return await retry(() => tryOfficialJoke(), 3, 300);
  } catch (err) {
    console.error('[jokeService] official joke failed', err);
    throw err;
  }
}