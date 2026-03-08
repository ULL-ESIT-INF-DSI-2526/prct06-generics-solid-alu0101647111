import {  SearchByOriginPlanet, SearchByAffiliation, SearchByPowerOrClass } from "./galacticregistry";
import { BasicGalacticCollection } from "./basiccollection";

// Modelos de datos
export interface Jedi { id: string; name: string; rank: string; trainingYear: number; affiliation: 'Republic' | 'Empire' | 'Sith' | 'Independent' }
export interface Starship { id: string; name: string; modelClass: string; buildYear: number; originPlanet: string; affiliation: 'Republic' | 'Empire' | 'Sith' | 'Independent' }
export interface Holocron { id: string; name: string; powerLevel: number; creationYear: number }

/**
 * Clase para la colección de Jedi, que extiende BasicGalacticCollection e implementa las interfaces de búsqueda por afiliación y por poder/clase.
 */
export class JediMasterCollection extends BasicGalacticCollection<Jedi> implements SearchByAffiliation<Jedi>, SearchByPowerOrClass<Jedi> {
  
  /**
   * Metodo para buscar Jedi por afiliación. Se filtra la lista de Jedi para incluir solo aquellos cuya afiliación coincide con el criterio proporcionado.
   * @param aff - Afiliación a buscar (Republic, Empire, Sith, Independent).
   * @returns Lista de Jedi que coinciden con la afiliación.
   */
  findByAffiliation(aff: 'Republic' | 'Empire' | 'Sith' | 'Independent'): Jedi[] {
    return this._items.filter(j => j.affiliation === aff);
  }

  /**
   * Metodo para buscar Jedi por poder o clase. Se filtra la lista de Jedi para incluir solo aquellos cuyo rango coincide con el criterio proporcionado.
   * @param rank - Rango o clase a buscar (ej. Padawan, Knight, Master).
   * @returns Lista de Jedi que coinciden con el rango o clase.
   */
  findByPowerOrClass(rank: string): Jedi[] {
    return this._items.filter(j => j.rank === rank);
  }

  /**
   * Metodo para buscar Jedi por año de entrenamiento. Se filtra la lista de Jedi para incluir solo aquellos cuyo año de entrenamiento coincide con el año proporcionado.
   * @param year - Año de entrenamiento a buscar.
   * @returns Lista de Jedi que coinciden con el año de entrenamiento.
   */
  findByDate(year: number): Jedi[] {
    return this._items.filter(j => j.trainingYear === year);
  }
}


/**
 * Clase para la colección de Starships, que extiende BasicGalacticCollection e implementa las interfaces de búsqueda por afiliación y por planeta de origen.
 */
export class StarshipCollection extends BasicGalacticCollection<Starship>
  implements SearchByAffiliation<Starship>, SearchByOriginPlanet<Starship> {
  
  /**
   * Funcion para buscar Starships por afiliación. Se filtra la lista de Starships para incluir solo aquellos cuya afiliación coincide con el criterio proporcionado.
   * @param aff - Afiliación a buscar (Republic, Empire, Sith, Independent).
   * @returns Lista de Starships que coinciden con la afiliación.
   */
  findByAffiliation(aff: 'Republic' | 'Empire' | 'Sith' | 'Independent'): Starship[] {
    return this._items.filter(s => s.affiliation === aff);
  }

  /**
   * Funcion para buscar Starships por planeta de origen. Se filtra la lista de Starships para incluir solo aquellos cuyo planeta de origen coincide con el criterio proporcionado.
   * @param planet - Planeta de origen a buscar.
   * @returns Lista de Starships que coinciden con el planeta de origen.
   */
  findByOriginPlanet(planet: string): Starship[] {
    return this._items.filter(s => s.originPlanet === planet);
  }

  /**
   * Funcion para buscar Starships por año de construcción. Se filtra la lista de Starships para incluir solo aquellos cuyo año de construcción coincide con el año proporcionado.
   * @param year - Año de construcción a buscar.
   * @returns Lista de Starships que coinciden con el año de construcción
   */
  findByDate(year: number): Starship[] {
    return this._items.filter(s => s.buildYear === year);
  }
}

/**
 * Clase para la colección de Holocrons, que extiende BasicGalacticCollection e implementa la interfaz de búsqueda por poder o clase.
 */
export class HolocronCollection extends BasicGalacticCollection<Holocron>
  implements SearchByPowerOrClass<Holocron> {

  /**
   * Fucion para buscar Holocrons por nivel de poder. Se filtra la lista de Holocrons para incluir solo aquellos cuyo nivel de poder coincide con el nivel proporcionado.
   * @param level - Nivel de poder a buscar.
   * @returns Lista de Holocrons que coinciden con el nivel de poder
   */
  findByPowerOrClass(level: number): Holocron[] {
    return this._items.filter(h => h.powerLevel === level);
  }

  // Funcion para buscar Holocrons por año de creación. Se filtra la lista de Holocrons para incluir solo aquellos cuyo año de creación coincide con el año proporcionado.
  findByDate(year: number): Holocron[] {
    return this._items.filter(h => h.creationYear === year);
  }
}