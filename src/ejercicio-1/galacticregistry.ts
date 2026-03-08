/**
 * Interfaz que define método para buscar por nombre.
 */
export interface SearchByName<T> {
  findByName(name: string): T[];
}

/**
 * Interfaz que define método para buscar por afiliación. Se usa un tipo unión para limitar las opciones a valores específicos.
 */
export interface SearchByAffiliation<T> {
  findByAffiliation(affiliation: 'Republic' | 'Empire' | 'Sith' | 'Independent'): T[];
}

/**
 * Interfaz que define método para buscar por poder o clase. Se usa un tipo unión para permitir niveles numéricos o clases de texto.
 */
export interface SearchByPowerOrClass<T> {
  findByPowerOrClass(criteria: string | number): T[];
}

/**
 * Interfaz que define método para buscar por fecha.
 */
export interface SearchByDate<T> {
  findByDate(year: number): T[];
}

/**
 * Interfaz que define método para buscar por planeta de origen.
 */
export interface SearchByOriginPlanet<T> {
  findByOriginPlanet(planet: string): T[];
}