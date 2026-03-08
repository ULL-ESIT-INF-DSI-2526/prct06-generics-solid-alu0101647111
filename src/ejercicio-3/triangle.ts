import { IShape } from './shape';

/**
 * Clase para representar un triángulo, implementando la interfaz de una
 * figura que nos obliga a implementar una función que calcule su area.
 */
export class Triangle implements IShape {
  constructor(private base: number, private height: number) {}

  /**
   * Función para calcular el area de un triángulo con su base y altura
   * @returns El valor del area del triángulo
   */
  public getArea(): number {
    return (this.base * this.height) / 2;
  }
}