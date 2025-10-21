import { describe, expect, it } from "vitest";

describe("🐾 Abstractas y herencia — ejemplos claros (AAA)", () => {
  it("usa clase abstracta con polimorfismo", () => {
    // Organizar
    abstract class Animal {
      constructor(public nombre: string) {}
      abstract sonido(): string;
      describir() {
        return `Soy ${this.nombre} y hago ${this.sonido()}`;
      }
    }

    class Gato extends Animal {
      sonido() {
        return "miau";
      }
    }

    class Perro extends Animal {
      sonido() {
        return "guau";
      }
    }

    const animales = [new Gato("Michi"), new Perro("Hoko")];

    // Acción
    const frases = animales.map((a) => a.describir());

    // Esperado
    expect(frases).toContain("Soy Michi y hago miau");
    expect(frases).toContain("Soy Hoko y hago guau");
  });

  it("usa 'extends' para heredar comportamiento", () => {
    // Organizar
    class Base {
      protected log(m: string) {
        return `[Base] ${m}`;
      }
    }

    class Derivada extends Base {
      saludar() {
        return this.log("hola");
      }
    }

    // Acción
    const instancia = new Derivada();
    const mensaje = instancia.saludar();

    // Esperado
    expect(mensaje).toBe("[Base] hola");
  });
});
