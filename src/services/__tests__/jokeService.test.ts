import { describe, it, expect, vi } from 'vitest';
import { fetchRandomJoke } from '../jokeService';

describe('jokeService', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns dad joke when icanhazdadjoke responds', async () => {
    const mockResponse = { id: 'abc', joke: 'A dad joke' };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    } as any));

    const j = await fetchRandomJoke();
    expect((j as any).joke).toBe('A dad joke');
  });

  it('falls back to official joke API when icanhazdadjoke fails', async () => {
    // First fetch (icanhaz) fails
    vi.stubGlobal('fetch', vi.fn()
      // first call: failure
      .mockResolvedValueOnce({ ok: false } as any)
      // second call: official joke
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: 123, setup: 'Setup', punchline: 'Punchline' }),
      } as any)
    );

    const j = await fetchRandomJoke();
    expect((j as any).setup).toBe('Setup');
    expect((j as any).punchline).toBe('Punchline');
  });
});