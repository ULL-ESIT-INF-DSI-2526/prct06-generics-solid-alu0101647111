import { Song } from "./cancion";
import { Podcast } from "./podcast";




export class History<T extends Song | Podcast> {
  protected items: T[] = []

  constructor() {};

  
  /**
   * Funcion para añadir un elemento al historial
   * @param item - Elmento a añadir
   */
  public add(item: T): void {
    this.items.push(item);
  }

  /**
   * Funcion para eliminar un elemento
   * @param index - Indice del elemento a aliminar.
   */
  public remove(index: number): void {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Indice invalido");
    }
    this.items.splice(index, 1);
  }

  /**
   * FUncion para coger uno de los elementos a traves de su indice.
   * @param index - Indice del elemento a buscar
   * @returns Elemento 
   */
  public get(index: number): Song | Podcast | undefined {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Indice invalido");
    }
    return this.items[index];
  }

  /**
   * Número de elementos del historial.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Filtra el historial mediante un predicado.
   */
  filter(predicate: (item: T) => boolean): History<Song | Podcast> {
    const result = new History();

    this.items
      .filter(predicate)
      .forEach((item) => result.add(item));

    return result;
  }

  /**
   * Duración total del historial.
   */
  duration(): number {
    return this.items.reduce((sum, item) => sum + item.duration(), 0);
  }
}