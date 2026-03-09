import { describe, expect, test } from "vitest";
import { Podcast, PodcastData } from "../../src/ejercicioclase-1/podcast";


describe("Song test", () => {
  const start = new Date(2024, 0, 1, 10, 0, 0); // 1 Jan 2024 10:00:00
  const end = new Date(2024, 0, 1, 10, 0, 30);
  let pd1: Podcast = new Podcast("Nombre", 3, "Miedo", "Carlos", start, end);
  let pd: PodcastData = { programName: "Nombre", episode: 3};


  test("Constructor y getters", () => {
    expect(pd1.getName()).toBe("Nombre");
    expect(pd1.getNumProg()).toBe(3);
    expect(pd1.getTematic()).toBe("Miedo");
    expect(pd1.getPresentador()).toBe("Carlos");
    expect(pd1.duration()).toBe(30);
    expect(pd1.data()).toStrictEqual(pd);
  });

  test("errrore", () => {
    expect(() => new Podcast("", 3, "Miedo", "Carlos", start, end)).toThrowError();
    expect(() => new Podcast("hola", 3, "Miedo", "Carlos", end, start)).toThrowError();
  });

});