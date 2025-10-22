/**
 * Mock service for testing the joke generator component
 * This provides sample jokes without needing network access
 */

import type { Joke } from './jokeService';

const MOCK_JOKES: Joke[] = [
  {
    id: 1,
    type: "general",
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!"
  },
  {
    id: 2,
    type: "programming",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!"
  },
  {
    id: 3,
    type: "general",
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!"
  },
  {
    id: 4,
    type: "programming",
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they don't C#!"
  },
  {
    id: 5,
    type: "general",
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved!"
  }
];

/**
 * Fetches a random joke from the mock data
 * Simulates network delay for realistic behavior
 */
export async function fetchRandomJoke(): Promise<Joke> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const randomIndex = Math.floor(Math.random() * MOCK_JOKES.length);
  return MOCK_JOKES[randomIndex];
}
