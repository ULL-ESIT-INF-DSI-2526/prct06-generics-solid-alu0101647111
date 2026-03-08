import { IShape } from './shape';

/**
 * Clase para representar un rectángulo, implementando la interfaz de una
 * figura que nos obliga a implementar una función que calcule su area.
 */
export class Rectangle implements IShape {
  constructor(private width: number, private height: number) {}

  /**
   * Función para calcular el area de un rectángulo con su anchura y altura.
   * @returns El valor del area del rectángulo
   */
  public getArea(): number {
    return this.width * this.height;
  }
}