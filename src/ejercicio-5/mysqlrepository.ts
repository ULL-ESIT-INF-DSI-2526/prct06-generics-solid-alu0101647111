import { UserRepository } from "./userrespository";

/**
 * clase MySqlUserRepository implementa la interfaz UserRepository para acceder a los datos de usuario desde una base de datos MySQL.
 */
export class MySqlUserRepository implements UserRepository {
  findById(id: string) {
    console.log("Querying MySQL...");
    return { id, name: "Ada" };
  }
}

/**
 * clase InMemoryUserRepository implementa la interfaz UserRepository para acceder a los datos de usuario desde una base de datos en memoria.
 */
export class InMemoryUserRepository implements UserRepository {
  findById(id: string) {
    return { id, name: "Test User" };
  }
}