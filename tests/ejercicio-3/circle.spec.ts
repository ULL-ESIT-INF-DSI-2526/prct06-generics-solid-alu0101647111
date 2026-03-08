import { describe, expect, test } from "vitest";
import { Circle } from "../../src/ejercicio-3/circle";
import { AreaCalculator } from "../../src/ejercicio-3/area";

describe("circle function tests", () => {
  test("circle", () => {
    const circle1: Circle = new Circle(3);
    let circle2: Circle = new Circle(4);
    expect(circle1.getArea()).toBe(28.274333882308138);
    expect(new AreaCalculator().area(circle2)).toBe(50.26548245743669);
  });
});