import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import JokeGenerator from '../JokeGenerator';

// mock fetch to return a dad joke by default
const dadJokeResponse = { id: 'd1', joke: 'Testing is fun' };

describe('JokeGenerator component', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => dadJokeResponse,
    } as any));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a joke and can copy via clipboard API', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    // provide navigator.clipboard
    (global as any).navigator.clipboard = { writeText };

    render(<JokeGenerator />);
    // wait for joke to appear
    await waitFor(() => expect(screen.getByTestId('joke-text')).toBeInTheDocument());

    const copyBtn = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(copyBtn);

    await waitFor(() => expect(writeText).toHaveBeenCalledWith('Testing is fun'));
    // cleanup
    delete (global as any).navigator.clipboard;
  });

  it('falls back to execCommand when clipboard API not available', async () => {
    // remove clipboard API
    delete (global as any).navigator.clipboard;
    // spy on execCommand
    const execSpy = vi.spyOn(document, 'execCommand').mockImplementation(() => true);

    render(<JokeGenerator />);
    await waitFor(() => expect(screen.getByTestId('joke-text')).toBeInTheDocument());

    const copyBtn = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(copyBtn);

    await waitFor(() => expect(execSpy).toHaveBeenCalledWith('copy'));
    execSpy.mockRestore();
  });
});