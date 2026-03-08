import { describe, expect, test } from "vitest";
import { Triangle } from "../../src/ejercicio-3/triangle";
import { AreaCalculator } from "../../src/ejercicio-3/area";

describe("triangle function tests", () => {
  test("triangle", () => {
    const triangle1: Triangle = new Triangle(3, 4);
    let triangle2: Triangle = new Triangle(5, 6);
    expect(triangle1.getArea()).toBe(6);
    expect(new AreaCalculator().area(triangle2)).toBe(15);
  });
});
