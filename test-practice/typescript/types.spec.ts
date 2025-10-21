import { describe, expect, it } from "vitest";

describe("🧠 Tipos TS — ejemplos básicos (AAA)", () => {
  it("usa un alias con unión de tipos", () => {
    // Organizar
    type ID = string | number;
    const valorA: ID = 123;
    const valorB: ID = "abc";

    // Acción
    const combinado = String(valorA) + valorB;

    // Esperado
    expect(combinado).toBe("123abc");
  });

  it("usa intersección de tipos", () => {
    // Organizar
    type ConFechas = { createdAt: Date };
    type Usuario = { nombre: string } & ConFechas;
    const usuario: Usuario = { nombre: "Camila", createdAt: new Date() };

    // Esperado
    expect(usuario.nombre).toBe("Camila");
  });

  it("usa genérico para envolver un valor", () => {
    // Organizar
    function envolver<T>(valor: T) {
      return { valor };
    }

    // Acción
    const resultado = envolver({ x: 1 });

    // Esperado
    expect(resultado.valor.x).toBe(1);
  });
});
