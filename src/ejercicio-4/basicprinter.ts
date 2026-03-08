import { Printer } from "./printer"

/**
 * Clase para una impresora básica que solo imprime.
 */
export class BasicPrinter implements Printer {
  /**
   * Funcion de la interfaz Printer que imprime un documento
   * @param doc - Documento a imprimir (String).
   */
  print(doc: string): void {
    console.log("Printing: ", doc);
  }
}