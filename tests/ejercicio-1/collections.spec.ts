import { describe, it, expect, beforeEach } from 'vitest';
import { 
  JediMasterCollection, 
  StarshipCollection, 
  HolocronCollection 
} from '../../src/ejercicio-1/collections'; 

describe('Academia Jedi - Pruebas de Registro Galáctico', () => {

  describe('JediMasterCollection (Fuerza y Afiliación)', () => {
    let jediOrder: JediMasterCollection;
    beforeEach(() => {
      jediOrder = new JediMasterCollection();
      jediOrder.add({ id: '1', name: 'Yoda', rank: 'Grand Master', trainingYear: -800, affiliation: 'Republic' });
      jediOrder.add({ id: '2', name: 'Mace Windu', rank: 'Master', trainingYear: -50, affiliation: 'Republic' });
      jediOrder.add({ id: '3', name: 'Darth Vader', rank: 'Sith Lord', trainingYear: -19, affiliation: 'Sith' });
    });

    it('debería filtrar por afiliación correctamente', () => {
      const sith = jediOrder.findByAffiliation('Sith');
      expect(sith).toHaveLength(1);
      expect(sith[0].name).toBe('Darth Vader');
    });

    it('debería encontrar maestros por rango', () => {
      const masters = jediOrder.findByPowerOrClass('Master');
      expect(masters.some(j => j.name === 'Mace Windu')).toBe(true);
    });
  });

  describe('StarshipCollection', () => {
    let fleet: StarshipCollection;

    beforeEach(() => {
      fleet = new StarshipCollection();
      fleet.add({ 
        id: 's1', name: 'X-Wing', modelClass: 'Starfighter', 
        buildYear: 0, originPlanet: 'Incom Corporation', affiliation: 'Republic' 
      });
    });

    it('debería filtrar por planeta de origen', () => {
      const results = fleet.findByOriginPlanet('Incom Corporation');
      expect(results).toHaveLength(1);
      expect(results[0].name).toBe('X-Wing');
    });

    it('debería heredar correctamente la búsqueda por nombre de la clase base', () => {
      const results = fleet.findByName('Wing');
      expect(results[0].id).toBe('s1');
    });
  });

  describe('HolocronCollection (ISP - Segregación)', () => {
    it('debería filtrar por nivel de poder numérico', () => {
      const library = new HolocronCollection();
      library.add({ id: 'h1', name: 'Sith Holocron', powerLevel: 10, creationYear: -3000 });
      
      const powerful = library.findByPowerOrClass(10);
      expect(powerful).toHaveLength(1);
    });

    it('no debería tener métodos de afiliación o planeta (Garantía ISP)', () => {
      const library = new HolocronCollection();
      expect(library).not.toHaveProperty('findByAffiliation');
      expect(library).not.toHaveProperty('findByOriginPlanet');
    });
  });

  describe('Lógica Base (BasicGalacticCollection)', () => {
    it('debería eliminar elementos por ID correctamente', () => {
      const shelf = new HolocronCollection();
      shelf.add({ id: 'temp', name: 'Borrable', powerLevel: 1, creationYear: 2024 });
      expect(shelf.getAll()).toHaveLength(1);
      shelf.remove('temp');
      expect(shelf.getAll()).toHaveLength(0);
    });
  });
});