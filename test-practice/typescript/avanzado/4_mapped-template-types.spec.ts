import { describe, expect, it } from "vitest";

describe("🗺️ Mapped Types + Template Literal Types (AAA)", () => {
  it("mapped types: volver readonly y opcional un modelo", () => {
    // Organizar
    type Base = { id: number; nombre: string; activo: boolean };

    // Acción
    type SoloLecturaOpcional = {
      readonly [K in keyof Base]?: Base[K];
    };

    const obj: SoloLecturaOpcional = { id: 1, nombre: "Cami" };

    // Esperado
    expect(obj.id).toBe(1);
    // @ts-expect-error readonly: no asignable
    obj.id = 2;
  });

  it("remap de claves + transformación de valores", () => {
    // Organizar
    type FlagsEntrada = { crear: number; leer: number; editar: number; borrar: number };

    // Acción
    type FlagsBooleanas = {
      // remap de clave: CamelCase
      [K in keyof FlagsEntrada as Capitalize<K & string>]: boolean;
    };

    const f: FlagsBooleanas = {
      Crear: true,
      Leer: false,
      Editar: true,
      Borrar: false,
    };

    // Esperado
    expect(f.Crear && f.Editar).toBe(true);
  });

  it("template literal types: componer strings tipados", () => {
    // Organizar
    type Recurso = "usuarios" | "pedidos";
    type Metodo = "GET" | "POST";
    type Ruta = `${Metodo} /api/${Recurso}`;

    // Acción
    const r1: Ruta = "GET /api/usuarios";
    const r2: Ruta = "POST /api/pedidos";

    // Esperado
    expect(r1).toContain("GET");
    expect(r2).toContain("POST");
    // @ts-expect-error no coincide con el patrón
    const r3: Ruta = "DELETE /api/usuarios";
    void r3;
  });
});
