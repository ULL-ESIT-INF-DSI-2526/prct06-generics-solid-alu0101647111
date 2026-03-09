import { describe, expect, it } from "vitest";
import { Song } from "../../src/ejercicioclase-1/cancion";
import { Podcast } from "../../src/ejercicioclase-1/podcast";
import { History } from "../../src/ejercicioclase-1/history";

describe('History', () => {

  describe("Song test", () => {
    let song1: Song = new Song("Titulo", "Carlos", "Pop", "album1", 123);
    const start = new Date(2024, 0, 1, 10, 0, 0); // 00:00
    const end = new Date(2024, 0, 1, 10, 0, 30); // 00:30
    let pd1: Podcast = new Podcast("Nombre", 3, "Miedo", "Carlos", start, end);
    const hist = new History();
    hist.add(song1);

    it("add y remove", () => {
      expect(hist.size()).toBe(1);
      hist.add(pd1);
      expect(hist.get(0)?.data()).toBe(song1.data());
      expect(hist.size()).toBe(2);
      hist.remove(1);
      expect(() => hist.remove(10)).toThrowError();
      expect(hist.size()).toBe(1);
      expect(() => hist.get(10)).toThrowError();
    });

    it("tamaño", () => {
      expect(hist.size()).toBe(1);
      hist.add(pd1);
      expect(hist.size()).toBe(2);
      hist.remove(1);
      hist.remove(0);
      expect(hist.size()).toBe(0);
      hist.add(song1);
    });

    it("get", () => {
      expect(hist.get(0)?.data()).toStrictEqual(song1.data());
      hist.add(pd1);
      expect(hist.get(1)?.data()).toStrictEqual(pd1.data());
      hist.remove(1);
    });

    it("duration", () => {
      expect(hist.duration()).toBe(123);
      hist.add(pd1);
      expect(hist.duration()).toBe(153);
      hist.remove(1);
      hist.remove(0)
      expect(hist.duration()).toBe(0);
    });


    it("filter", () => {
      hist.add(song1);
      hist.add(pd1);
      const filtered = hist.filter((s) => s.duration() > 120);
      expect(filtered.size()).toBe(1);
    });


    it("filter", () => {
      const filtered = hist.filter((s) => s.duration() >= 30);
      expect(filtered.size()).toBe(2);
    });

  });
});