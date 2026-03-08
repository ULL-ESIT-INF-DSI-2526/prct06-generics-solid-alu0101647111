import { describe, expect, test, vi } from "vitest";
import { Scanner } from "../../src/ejercicio-4/scanner";

describe("BasicScanner function tests", () => {
  test("basic scanner", () => {
    const scanner: Scanner = {
      scan: (doc: string) => {
        console.log("Scanning: ", doc);
        return `Scanned: ${doc}`;
      }
    };
    const consoleSpy = vi.spyOn(console, 'log');
    expect(scanner.scan("Documento de prueba")).toBe("Scanned: Documento de prueba");
    expect(consoleSpy).toHaveBeenCalledWith("Scanning: ", "Documento de prueba");
    consoleSpy.mockRestore();
  });
});

