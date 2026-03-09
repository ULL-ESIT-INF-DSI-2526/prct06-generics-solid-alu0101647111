import { describe, expect, test } from "vitest";
import { Song } from "../../src/ejercicioclase-1/cancion";


describe("Song test", () => {
  let song1: Song = new Song("Titulo", "Carlos", "Pop", "album1", 123);

  test("Constructor y getters", () => {
    expect(song1.getTitle()).toBe("Titulo");
    expect(song1.getArtist()).toBe("Carlos");
    expect(song1.getGenre()).toBe("Pop");
    expect(song1.getAlbum()).toBe("album1");
    expect(song1.duration()).toBe(123);
    expect(song1.data()).toBe("Titulo - Carlos");
  });

  test("errrore", () => {
    expect(() => new Song("", "Carlos", "Pop", "album1", 123)).toThrowError();
    expect(() => new Song("hola", "Carlos", "Pop", "album1", -123)).toThrowError();
  });

});