import type { JSX } from 'react';
import JokeGenerator from '../components/JokeGenerator';

export default function JokeGeneratorDemo(): JSX.Element {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      padding: '2rem 1rem'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Joke Generator Demo
        </h1>
        <p style={{ 
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          Testing the random joke generator component
        </p>
      </div>
      <JokeGenerator />
    </div>
  );
}
