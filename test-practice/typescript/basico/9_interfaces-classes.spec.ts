import { describe, expect, it } from "vitest";

describe("🏷️ Interfaces y Clases — ejemplos claros (AAA)", () => {
  it("define una interfaz con campos opcionales y readonly", () => {
    // Organizar
    interface Direccion {
      calle: string;
      numero: number;
      comuna?: string;
      readonly pais: string;
    }

    const direccion: Direccion = {
      calle: "Bosque",
      numero: 10,
      pais: "CL",
    };

    // Esperado
    expect(direccion.pais).toBe("CL");
  });

  it("implementa una interfaz en una clase", () => {
    // Organizar
    interface Empleado {
      id: string;
      nombre: string;
      cargo: "barista" | "admin";
    }

    class EmpleadoClase implements Empleado {
      constructor(
        public id: string,
        public nombre: string,
        public cargo: "barista" | "admin",
      ) {}
    }

    // Acción
    const e = new EmpleadoClase("1", "Willy", "barista");

    // Esperado
    expect(e.nombre).toBe("Willy");
    expect(e.cargo).toBe("barista");
  });

  it("clase con parametros directos o primitivos", () => {
    class Animal {
      public nombre: string;
      public cantidadDePatas: number;
      constructor(nombre: string, cantidadDePatas: number) {
        this.nombre = nombre;
        this.cantidadDePatas = cantidadDePatas;
      }
    }

    // Acción
    const animal = new Animal("a", 4);

    // Esperado
    expect(animal.nombre).toBe("a");
    expect(animal.cantidadDePatas).toBe(4);
  });

  it("clase con parametro de objeto", () => {
    interface AnimalArgumentos {
      nombre: string;
      cantidadDePatas?: number;
    }

    class Animal {
      public nombre: string;
      public cantidadDePatas?: number;
      constructor(a: AnimalArgumentos) {
        this.nombre = a.nombre;
        this.cantidadDePatas = a.cantidadDePatas;
      }
    }

    // Acción
    const animal = new Animal({ nombre: "Gato", cantidadDePatas: 5 });
    const animal_2 = new Animal({ nombre: "Gato" });

    // Esperado
    expect(animal.cantidadDePatas).toBe(5);
    expect(animal.nombre).toBe("Gato");

    expect(animal_2.cantidadDePatas).toBeUndefined();
    expect(animal_2.nombre).toBe("Gato");
  });
});
