/**
 * Interfaz que representa una impresora, con un método para imprimir un documento.
 */
export interface Printer {
  print(doc: string): void;
}