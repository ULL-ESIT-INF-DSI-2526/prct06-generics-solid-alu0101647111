import { describe, expect, test } from "vitest";
import { UserRepository, UserService } from "../../src/ejercicio-5/userrespository";
import { MySqlUserRepository, InMemoryUserRepository } from "../../src/ejercicio-5/mysqlrepository";  

describe("UserService tests", () => {
  test("UserService with MySqlUserRepository returns uppercase name", () => {
    const mySqlRepo = new MySqlUserRepository();
    const userService = new UserService(mySqlRepo);
    expect(userService.getUserName("1")).toBe("ADA");
  });

  test("UserService with InMemoryUserRepository returns uppercase name", () => {
    const inMemoryRepo = new InMemoryUserRepository();
    const userService = new UserService(inMemoryRepo);
    expect(userService.getUserName("2")).toBe("TEST USER");
  });

  test("UserService throws error when user not found", () => {
    const emptyRepo: UserRepository = {
      findById: (id: string) => id === "3" ? null : { id, name: "Some User" },
    };
    const userService = new UserService(emptyRepo);
    expect(() => userService.getUserName("3")).toThrowError("User not found");
  });
});