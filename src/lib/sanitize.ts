import DOMPurify from 'dompurify';

/**
 * Nettoie une chaîne HTML avant injection dans le DOM.
 * Utilise DOMPurify.sanitize avec options par défaut.
 */
export function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input);
}
