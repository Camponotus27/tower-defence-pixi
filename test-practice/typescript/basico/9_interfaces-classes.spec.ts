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
});
