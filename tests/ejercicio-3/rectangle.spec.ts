import { describe, expect, test } from "vitest";
import { Rectangle } from "../../src/ejercicio-3/rectangle";
import { AreaCalculator } from "../../src/ejercicio-3/area";

describe("rectangle function tests", () => {
  test("rectangle", () => {
    const rectangle1: Rectangle = new Rectangle(3, 4);
    let rectangle2: Rectangle = new Rectangle(5, 6);
    expect(rectangle1.getArea()).toBe(12);
    expect(new AreaCalculator().area(rectangle2)).toBe(30);
  });
});
