import { describe, expect, it } from "vitest";

describe("🧰 Varios conceptos útiles (AAA)", () => {
  it("operador ternario", () => {
    // Organizar
    const edad = 20;

    // Acción
    const permiso = edad >= 18 ? "adulto" : "menor";

    // Esperado
    expect(permiso).toBe("adulto");
  });

  it("optional chaining y nullish coalescing", () => {
    // Organizar
    const usuario: any = { perfil: null };

    // Acción
    const comuna = usuario.perfil?.direccion?.comuna ?? "Desconocida";

    // Esperado
    expect(comuna).toBe("Desconocida");
  });

  it("template literals", () => {
    // Organizar
    const nombre = "Seba";
    const edad = 30;

    // Acción
    const texto = `Hola ${nombre}, tienes ${edad} años.`;

    // Esperado
    expect(texto).toBe("Hola Seba, tienes 30 años.");
  });

  it("spread y copia inmutable", () => {
    // Organizar
    const base = { nombre: "Cami", edad: 28 };
    const extra = { ciudad: "Buin" };

    // Acción
    const combinado = { ...base, ...extra };

    // Esperado
    expect(combinado).toEqual({ nombre: "Cami", edad: 28, ciudad: "Buin" });
    expect(base).toEqual({ nombre: "Cami", edad: 28 }); // no se mutó
  });
});
