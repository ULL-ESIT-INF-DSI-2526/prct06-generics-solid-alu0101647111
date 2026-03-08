/**
 * Interfaz que representa una máquina de fax, con un método para enviar un documento por fax.
 */
export interface FaxMachine {
  fax(doc: string): void;
}

/**
 * Funcion para enviar un fax con una máquina que lo permita.
 * @param m - Dispositivo con el que queremos enviar el fax
 * @param doc - Documento (string) que queremos enviar.
 */
export function sendFax(m: FaxMachine, doc: string) {
  m.fax(doc);
}