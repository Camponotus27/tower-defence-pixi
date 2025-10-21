import { describe, expect, it } from "vitest";

describe("🧪 Overloads y predicados avanzados (AAA)", () => {
  it("sobrecargas: firmas distintas con implementación única", () => {
    // Organizar
    function obtener(valor: number): number[];
    function obtener(valor: string): string[];
    function obtener(valor: number | string) {
      return typeof valor === "number"
        ? Array.from({ length: valor }, (_, i) => i)
        : valor.split("");
    }

    // Acción
    const a = obtener(3); // number[]
    const b = obtener("OK"); // string[]

    // Esperado
    expect(a).toEqual([0, 1, 2]);
    expect(b).toEqual(["O", "K"]);
  });

  it("predicado que distingue arrays de no arrays", () => {
    // Organizar
    function esArray<T>(x: T | T[]): x is T[] {
      return Array.isArray(x);
    }

    const entrada: number | number[] = [1, 2, 3];

    // Acción
    const resultado = esArray(entrada) ? entrada.reduce((a, b) => a + b, 0) : entrada;

    // Esperado
    expect(resultado).toBe(6);
  });

  it("narrowing por igualdad estricta con literales", () => {
    // Organizar
    type Nivel = "low" | "mid" | "high";
    function prioridad(n: Nivel) {
      if (n === "high") return 3;
      if (n === "mid") return 2;
      return 1;
    }

    // Acción
    const p1 = prioridad("low");
    const p2 = prioridad("high");

    // Esperado
    expect(p1).toBe(1);
    expect(p2).toBe(3);
  });
});
