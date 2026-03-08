// 1. Definimos la abstracción (Interfaz)
/**
 * UserRepository es una interfaz que define el contrato para acceder a los datos de usuario.
 */
export interface UserRepository {
  findById(id: string): { id: string; name: string } | null;
}




/**
 * clase que depende de la abstracción UserRepository para obtener los datos de usuario y realizar operaciones sobre ellos. 
 * Esto permite cambiar la implementación del repositorio sin afectar a UserService, cumpliendo así con el principio de inversión de dependencias.
 */
export class UserService {
  constructor(private repo: UserRepository) {}

  getUserName(id: string): string {
    const user = this.repo.findById(id);
    if (!user) throw new Error("User not found");
    return user.name.toUpperCase();
  }
}

