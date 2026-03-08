import { describe, expect, test, vi } from "vitest";
import { FaxMachine, sendFax } from "../../src/ejercicio-4/faxmachine";

describe("FaxMachine function tests", () => {
  test("fax machine", () => {
    const faxMachine: FaxMachine = {
      fax: (doc: string) => {
        console.log("Faxing: ", doc);
      }
    };
    const consoleSpy = vi.spyOn(console, 'log');
    expect(faxMachine.fax("Documento de prueba"));
    expect(consoleSpy).toHaveBeenCalledWith("Faxing: ", "Documento de prueba");
    consoleSpy.mockRestore();
  });
  test("send fax", () => {
    const faxMachine: FaxMachine = {
      fax: (doc: string) => {
        console.log("Faxing: ", doc);
      }
    };
    const consoleSpy = vi.spyOn(console, 'log');
    expect(sendFax(faxMachine, "Documento de prueba"));
    expect(consoleSpy).toHaveBeenCalledWith("Faxing: ", "Documento de prueba");
    consoleSpy.mockRestore();
  });

});