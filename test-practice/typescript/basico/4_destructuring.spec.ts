import { describe, expect, it } from "vitest";

describe("🔄 Desestructuración — ejemplos básicos (AAA)", () => {
  it("extrae propiedades de un objeto", () => {
    // Organizar
    const persona = { nombre: "Camila", edad: 28, ciudad: "Buin" };

    // Acción
    const { nombre, edad } = persona;

    // Esperado
    expect(nombre).toBe("Camila");
    expect(edad).toBe(28);
  });

  it("extrae elementos de un array", () => {
    // Organizar
    const numeros = [10, 20, 30];

    // Acción
    const [primero, segundo] = numeros;

    // Esperado
    expect(primero).toBe(10);
    expect(segundo).toBe(20);
  });

  it("usa alias y valores por defecto", () => {
    // Organizar
    const cafe = { tipo: "espresso" };

    // Acción
    const { tipo: tipoCafe, temperatura = "caliente" } = cafe;

    // Esperado
    expect(tipoCafe).toBe("espresso");
    expect(temperatura).toBe("caliente");
  });

  it("desestructuración anidada", () => {
    // Organizar
    const pedido = {
      cliente: { nombre: "Seba", direccion: { comuna: "Buin" } },
    };

    // Acción
    const {
      cliente: {
        direccion: { comuna },
      },
    } = pedido;

    // Esperado
    expect(comuna).toBe("Buin");
  });
});
