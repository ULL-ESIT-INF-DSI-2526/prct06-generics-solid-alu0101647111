import { IShape } from './shape';

/**
 * Clase para representar un circulo, implementando la interfaz de una
 * figura que nos obliga a implementar una función que calcule su area.
 */
export class Circle implements IShape {
  constructor(private radio: number) {}

  /**
   * Función para calcular el area de un circulo con su radio
   * @returns El valor del area del circulo
   */
  public getArea(): number {
    return this.radio * this.radio * Math.PI;
  }
}