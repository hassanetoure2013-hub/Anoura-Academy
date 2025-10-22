/**
 * Service for fetching random jokes from the Official Joke API
 */

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

/**
 * Fetches a random joke from the API
 * @returns Promise with a random joke
 * @throws Error if the API request fails
 */
export async function fetchRandomJoke(): Promise<Joke> {
  try {
    const response = await fetch(JOKE_API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const joke: Joke = await response.json();
    return joke;
  } catch (error) {
    console.error('Failed to fetch joke:', error);
    throw new Error('Unable to fetch a joke at this time. Please try again later.');
  }
}
