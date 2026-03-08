import { IShape } from "./shape";

/**
 * Clase para acceder al area de la figura (sea cual sea)
 */
export class AreaCalculator {
  /**
   * 
   * @param shape - Figura 
   * @returns Retorna el valor del area de esa figura a través de la función getArea 
   * que sabemos que tiene que tener implementada en su clase
   */
  public area(shape: IShape): number {
    return shape.getArea();
  }
}