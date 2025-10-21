import { describe, expect, it } from "vitest";

describe("🔧 JSON — parse/stringify y manejo de errores (AAA)", () => {
  it("JSON.stringify convierte objeto a texto", () => {
    // Organizar
    const obj = { producto: "café", precio: 2000 };

    // Acción
    const json = JSON.stringify(obj);

    // Esperado
    expect(json).toContain('"producto"');
    expect(json).toContain('"café"');
  });

  it("JSON.parse convierte texto a objeto", () => {
    // Organizar
    const texto = '{"nombre":"Camila","rol":"barista"}';

    // Acción
    const obj = JSON.parse(texto);

    // Esperado
    expect(obj.nombre).toBe("Camila");
  });

  it("maneja errores al parsear JSON inválido", () => {
    // Organizar
    const invalido = '{"sin cerrar": true';

    // Acción
    let errorCapturado = false;
    try {
      JSON.parse(invalido);
    } catch {
      errorCapturado = true;
    }

    // Esperado
    expect(errorCapturado).toBe(true);
  });

  it("replacer y reviver en stringify/parse", () => {
    // Organizar
    const obj = { clave: "abc", secreto: "123" };

    // Acción
    const json = JSON.stringify(obj, (k, v) => (k === "secreto" ? undefined : v));
    const nuevo = JSON.parse(json, (k, v) => (k === "clave" ? v.toUpperCase() : v));

    // Esperado
    expect(json).not.toContain("secreto");
    expect(nuevo.clave).toBe("ABC");
  });
});
