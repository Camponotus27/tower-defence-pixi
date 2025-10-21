import { describe, expect, it } from "vitest";

describe("🔑 keyof / indexed access / typeof (AAA)", () => {
  it("keyof: obtiene las claves de un tipo como unión literal", () => {
    // Organizar
    type Producto = { id: number; nombre: string; precio: number };

    // Acción
    type Claves = keyof Producto; // "id" | "nombre" | "precio"
    const claveValida: Claves = "precio";

    // Esperado
    expect(claveValida).toBe("precio");
    // @ts-expect-error "stock" no es parte de las claves
    const claveInvalida: Claves = "stock";
    void claveInvalida;
  });

  it("indexed access type: T[K] obtiene el tipo del campo", () => {
    // Organizar
    type Usuario = { id: string; activo: boolean };
    type TipoId = Usuario["id"]; // string
    type TipoActivo = Usuario["activo"]; // boolean

    // Acción
    const id: TipoId = "abc";
    const ok: TipoActivo = true;

    // Esperado
    expect(id).toBe("abc");
    expect(ok).toBe(true);
  });

  it("typeof (type query): inferir tipo a partir de un valor", () => {
    // Organizar
    const config = {
      app: "Oasis",
      port: 3000,
      features: { auth: true, logs: false },
    };

    // Acción
    type Config = typeof config;
    const copia: Config = { ...config };

    // Esperado
    expect(copia.app).toBe("Oasis");
    expect(copia.features.auth).toBe(true);
  });
});
