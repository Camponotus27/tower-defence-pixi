import { describe, expect, it } from "vitest";

describe("🔍 Expresiones Regulares — ejemplos (AAA)", () => {
  it("valida formato básico de email", () => {
    // Organizar
    const texto = "correo@dominio.cl";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Acción
    const esValido = regex.test(texto);

    // Esperado
    expect(esValido).toBe(true);
  });

  it("extrae hashtags de un texto", () => {
    // Organizar
    const texto = "Hola #Pixi #TypeScript";
    const regex = /#[\p{L}\p{N}_]+/gu;

    // Acción
    const hashtags = texto.match(regex);

    // Esperado
    expect(hashtags).toEqual(["#Pixi", "#TypeScript"]);
  });

  it("captura nombre y edad usando grupos", () => {
    // Organizar
    const texto = "Nombre: Ana, Edad: 28";
    const regex = /Nombre:\s*(?<nombre>\p{L}+),\s*Edad:\s*(?<edad>\d+)/u;

    // Acción
    const grupos = texto.match(regex)?.groups;

    // Esperado
    expect(grupos).toEqual({ nombre: "Ana", edad: "28" });
  });

  it("reemplaza espacios múltiples por uno solo", () => {
    // Organizar
    const texto = "hola   mundo";
    const regex = /\s{2,}/g;

    // Acción
    const limpio = texto.replace(regex, " ");

    // Esperado
    expect(limpio).toBe("hola mundo");
  });

  it("lookahead: números seguidos de 'kg'", () => {
    // Organizar
    const texto = "10kg 20g 5kg";
    const regex = /\b(\d+)(?=kg)\b/g;

    // Acción
    const resultado = [...texto.matchAll(regex)].map((m) => m[1]);

    // Esperado
    expect(resultado).toEqual(["10", "5"]);
  });
});
