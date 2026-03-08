import { describe, expect, test, vi } from "vitest";
import { BasicPrinter } from "../../src/ejercicio-4/basicprinter";


describe("BasicPrinter function tests", () => {
  test("basic printer", () => {
    const bprinter: BasicPrinter = new BasicPrinter();
    const consoleSpy = vi.spyOn(console, 'log');
    expect(bprinter.print("Hola"));
    expect(consoleSpy).toHaveBeenCalledWith("Printing: ", "Hola");
    consoleSpy.mockRestore();
  });
  test("printer no scan no fax", () => {
    const bprinter: BasicPrinter = new BasicPrinter();
    expect(bprinter).not.toHaveProperty('scan');
    expect(bprinter).not.toHaveProperty('fax');
  });
});