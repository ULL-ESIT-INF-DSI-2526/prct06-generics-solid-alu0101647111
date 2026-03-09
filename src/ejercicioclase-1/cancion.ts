import { Reproducible } from "./reproducible";

export class Song implements Reproducible<string> {
  private readonly title: string;
  private readonly artist: string;
  private readonly genre: string;
  private readonly album: string;
  private readonly seconds: number;

  /**
   * Crea una instancia de Song.
   */
  constructor(
    title: string,
    artist: string,
    genre: string,
    album: string,
    seconds: number
  ) {
    if (!title || !artist) {
      throw new Error("Title and artist cannot be empty");
    }

    if (seconds <= 0) {
      throw new Error("Duration must be positive");
    }

    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.album = album;
    this.seconds = seconds;
  }

  /** Título de la canción */
  getTitle(): string {
    return this.title;
  }

  /** Artista */
  getArtist(): string {
    return this.artist;
  }

  /** Género musical */
  getGenre(): string {
    return this.genre;
  }

  /** Álbum */
  getAlbum(): string {
    return this.album;
  }

  /**
   * Devuelve los datos de la canción.
   */
  data(): string {
    return `${this.title} - ${this.artist}`;
  }

  /**
   * Duración en segundos.
   */
  duration(): number {
    return this.seconds;
  }
}