import { Reproducible } from "./reproducible";

/**
 * Tipo de datos de un podcast.
 */
export interface PodcastData {
  programName: string;
  episode: number;
}

export class Podcast implements Reproducible<PodcastData> {
  private readonly name: string;
  private readonly numprog: number;
  private readonly tematic: string;
  private readonly presentador: string;
  private readonly inicio: Date;
  private readonly fin: Date;

  /**
   * Crea una instancia de Song.
   */
  constructor(
    name: string,
    numprog: number,
    tematic: string,
    presentador: string,
    inicio: Date,
    fin: Date
  ) {
    if (!name || !numprog) {
      throw new Error("Name and numprog can't be empty");
    }

    if (inicio > fin) {
      throw new Error("Inicio tiee que sr antes que fin");
    }

    this.name = name;
    this.numprog = numprog;
    this.tematic = tematic;
    this.presentador = presentador;
    this.inicio = inicio;
    this.fin = fin
  }

  /** Nombre del podcast */
  getName(): string {
    return this.name;
  }

  /** Numero de programa */
  getNumProg(): number {
    return this.numprog;
  }

  /** Tematica */
  getTematic(): string {
    return this.tematic;
  }

  /** Álbum */
  getPresentador(): string {
    return this.presentador;
  }

  /**
   * Devuelve los datos de la canción.
   */
  data(): PodcastData {
    return {programName: this.name, episode: this.numprog};
  }

  /**
   * Duración en segundos, con la resta de fin - inicios cogiendo los segundos de la fecha.
   */
  duration(): number {
    return this.fin.getSeconds() - this.inicio.getSeconds();
  }
}