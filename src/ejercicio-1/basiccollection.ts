import { SearchByName } from "./galacticregistry";

/**
 * Interfaz que define lo basico de una colección galáctica, incluyendo métodos para agregar, eliminar, obtener todos los elementos y buscar por nombre.
 * Se extiende de SearchByName para incluir la funcionalidad de búsqueda por nombre.
 */
export interface GalacticRegistry<T> extends SearchByName<T> {
  add(item: T): void;
  remove(id: string): void;
  getAll(): T[];
}

/**
 * Clase abstracta generica para colecciones galácticas que implementa la interfaz GalacticRegistry.
 * Implementa la lógica común de almacenamiento y búsqueda por nombre.
 */
export abstract class BasicGalacticCollection<T extends { id: string; name: string }> 
  implements GalacticRegistry<T> {
  
  protected _items: T[] = [];

  /**
   * Función para agregar un nuevo elemento a la colección. Se asume que el elemento tiene una propiedad 'id' única y una propiedad 'name' para la búsqueda.
   * @param item - El elemento a agregar.
   */
  add(item: T): void {
    this._items.push(item);
  }

  /**
   * Función para eliminar un elemento de la colección por su id. Se filtra la lista de elementos para excluir el que coincide con el id proporcionado.
   * @param id - El id del elemento a eliminar.
   */
  remove(id: string): void {
    this._items = this._items.filter(i => i.id !== id);
  }

  /**
   * Función para obtener todos los elementos de la colección. Devuelve una copia de la lista interna.
   * @returns - Lista de todos los elementos
   */
  getAll(): T[] {
    return [...this._items]; // Devolvemos copia para evitar mutaciones externas
  }

  /**
   * Función para buscar elementos por nombre. Se filtra la lista de elementos para incluir solo aquellos cuyo nombre contiene el texto de búsqueda, ignorando mayúsculas/minúsculas. 
   * @param name - Nombre o parte del nombre a buscar.
   * @returns Lista de elementos que coinciden con la búsqueda.
   */
  findByName(name: string): T[] {
    return this._items.filter(i => 
      i.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  /**
   * Metodo abstracto para buscar por fecha, que debe ser implementado por las clases concretas que extiendan BasicGalacticCollection.
   * @param year - Año a buscar.
   * @returns Lista de elementos que coinciden con la búsqueda por fecha.
   */
  abstract findByDate(year: number): T[];
}