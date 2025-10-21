import { describe, expect, it } from "vitest";

describe("🧷 satisfies / as const — control fino de tipos (AAA)", () => {
  it("satisfies: valida la forma sin cambiar el tipo inferido", () => {
    // Organizar
    type MenuItem = { id: string; precio: number };
    const item = {
      id: "cafe-latte",
      precio: 3200,
      etiqueta: "popular", // propiedad extra que NO está en MenuItem
    } satisfies MenuItem;

    // Acción
    const id = item.id;
    // Nota: item mantiene su tipo real (incluye 'etiqueta')

    // Esperado
    expect(id).toBe("cafe-latte");
    expect(item.etiqueta).toBe("popular");
  });

  it("as const: vuelve literales de solo lectura y estrecha sus tipos", () => {
    // Organizar
    const estados = ["draft", "published", "archived"] as const;
    type Estado = (typeof estados)[number]; // "draft" | "published" | "archived"

    // Acción
    const actual: Estado = "published";

    // Esperado
    expect(actual).toBe("published");
    // @ts-expect-error no es parte de la unión literal
    const invalido: Estado = "deleted";
    void invalido;
  });
});
