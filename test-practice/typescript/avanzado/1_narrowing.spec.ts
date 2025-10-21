import { describe, expect, it } from "vitest";

describe("🧭 Type Narrowing — typeof / in / instanceof / predicados (AAA)", () => {
  it("typeof: refina tipos en tiempo de compilación", () => {
    // Organizar
    const procesar = (valor: string | number) => {
      if (typeof valor === "string") {
        return valor.toUpperCase();
      } else {
        return valor * 2;
      }
    };

    // Acción
    const a = procesar("hola");
    const b = procesar(5);

    // Esperado
    expect(a).toBe("HOLA");
    expect(b).toBe(10);
  });

  it("in: detecta propiedad en un union de objetos", () => {
    // Organizar
    type Usuario = { nombre: string; email: string };
    type Invitado = { nombre: string };

    const saludar = (persona: Usuario | Invitado) => {
      return "email" in persona
        ? `Hola ${persona.nombre}, te enviamos a ${persona.email}`
        : `Hola ${persona.nombre}, regístrate para continuar`;
    };

    // Acción
    const u = saludar({ nombre: "Camila", email: "cami@oasis.cl" });
    const i = saludar({ nombre: "Sebastián" });

    // Esperado
    expect(u).toContain("cami@oasis.cl");
    expect(i).toContain("regístrate");
  });

  it("instanceof: valida instancias de clase", () => {
    // Organizar
    class Animal {}
    class Perro extends Animal {
      ladrar() {
        return "guau";
      }
    }

    const emitir = (a: Animal) => {
      if (a instanceof Perro) return a.ladrar();
      return "silencio";
    };

    // Acción
    const sonido = emitir(new Perro());

    // Esperado
    expect(sonido).toBe("guau");
  });

  it("predicado de tipo: crea funciones que refinan tipos", () => {
    // Organizar
    function esNumero(x: unknown): x is number {
      return typeof x === "number";
    }

    const datos: unknown[] = [1, "dos", 3, "cuatro"];

    // Acción
    const soloNumeros = datos.filter(esNumero);

    // Esperado
    expect(soloNumeros).toEqual([1, 3]);
  });
});
