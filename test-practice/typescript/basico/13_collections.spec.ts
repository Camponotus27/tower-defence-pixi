import { describe, expect, it } from "vitest";

describe("🗂 Colecciones modernas — Map / Set / WeakMap / WeakSet (AAA)", () => {
  it("Map: pares clave-valor de cualquier tipo", () => {
    // Organizar
    const precios = new Map<string, number>();
    precios.set("café", 2000);
    precios.set("té", 1500);

    // Acción
    const cafe = precios.get("café");
    const total = Array.from(precios.values()).reduce((a, b) => a + b, 0);

    // Esperado
    expect(cafe).toBe(2000);
    expect(total).toBe(3500);
  });

  it("Set: colección sin duplicados", () => {
    // Organizar
    const ingredientes = new Set(["agua", "café", "agua"]);

    // Acción
    ingredientes.add("leche");

    // Esperado
    expect([...ingredientes]).toEqual(["agua", "café", "leche"]);
  });

  it("WeakMap: solo acepta objetos como claves", () => {
    // Organizar
    const wm = new WeakMap<object, string>();
    const obj = { id: 1 };

    // Acción
    wm.set(obj, "guardado");
    const valor = wm.get(obj);

    // Esperado
    expect(valor).toBe("guardado");
  });

  it("WeakSet: contiene objetos únicos y débiles", () => {
    // Organizar
    const ws = new WeakSet<object>();
    const a = { id: 1 };
    const b = { id: 2 };

    // Acción
    ws.add(a);
    const tieneA = ws.has(a);
    const tieneB = ws.has(b);

    // Esperado
    expect(tieneA).toBe(true);
    expect(tieneB).toBe(false);
  });
});
