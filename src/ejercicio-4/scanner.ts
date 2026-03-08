/**
 * Interfaz que representa un escáner, con un método para escanear un documento.
 */
export interface Scanner {
  scan(doc: string): string;
}