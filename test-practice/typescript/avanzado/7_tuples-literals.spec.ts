import { describe, expect, it } from "vitest";

describe("🎯 Tuplas y tipos literales — posiciones fijas y variantes (AAA)", () => {
  it("tupla: posiciones y tipos fijos", () => {
    // Organizar
    const par: [string, number] = ["café", 2];

    // Acción
    const descripcion = `${par[0]} x${par[1]}`;

    // Esperado
    expect(descripcion).toBe("café x2");
  });

  it("tupla readonly: no se puede reasignar posiciones", () => {
    // Organizar
    const punto: readonly [number, number] = [10, 20];

    // Acción
    const texto = `(${punto[0]},${punto[1]})`;

    // Esperado
    expect(texto).toBe("(10,20)");
    // @ts-expect-error no se puede escribir en tupla readonly
    // punto[0] = 99;
  });

  it("tipos literales (uniones): restringe a valores exactos", () => {
    // Organizar
    type Tamanio = "S" | "M" | "L";
    const elegir = (t: Tamanio) => `Elegiste ${t}`;

    // Acción
    const m = elegir("M");

    // Esperado
    expect(m).toBe("Elegiste M");
    // @ts-expect-error "XL" no está permitido
    // elegir("XL");
  });

  it("discriminated unions: chequeo exhaustivo con 'never'", () => {
    // Organizar
    type PedidoCafe =
      | { tipo: "espresso"; shots: 1 | 2 }
      | { tipo: "latte"; leche: "entera" | "avena" };

    const preparar = (p: PedidoCafe) => {
      switch (p.tipo) {
        case "espresso":
          return `Espresso ${p.shots} shot(s)`;
        case "latte":
          return `Latte con leche ${p.leche}`;
        default: {
          // Si llega aquí, TypeScript debería advertirnos si el union no está exhaustivo
          const _exhaustivo: never = p;
          return _exhaustivo;
        }
      }
    };

    // Acción
    const a = preparar({ tipo: "espresso", shots: 2 });
    const b = preparar({ tipo: "latte", leche: "avena" });

    // Esperado
    expect(a).toBe("Espresso 2 shot(s)");
    expect(b).toBe("Latte con leche avena");
  });
});
