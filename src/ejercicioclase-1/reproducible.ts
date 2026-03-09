/**
 * Interfaz para definir todo lo que tiene que contener un elemento en un historial de reproducción
 */
export interface Reproducible<T> {
  data(): T; // Permite acceder a la información del elemento
  duration(): number; // Retornar la duración en segundos

}