import { describe, expect, it } from "vitest";

describe("🕓 Date e Intl — fechas, horas y formatos (AAA)", () => {
  it("Date: creación y métodos comunes", () => {
    // Organizar
    const fecha = new Date("2025-10-20T12:00:00Z");

    // Acción
    const año = fecha.getUTCFullYear();
    const mes = fecha.getUTCMonth() + 1;
    const dia = fecha.getUTCDate();

    // Esperado
    expect(año).toBe(2025);
    expect(mes).toBe(10);
    expect(dia).toBe(20);
  });

  it("Intl.DateTimeFormat: formatea fecha localmente", () => {
    // Organizar
    const fecha = new Date("2025-12-24T18:00:00Z");
    const formato = new Intl.DateTimeFormat("es-CL", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Santiago",
    });

    // Acción
    const texto = formato.format(fecha);

    // Esperado
    expect(texto).toContain("2025");
    expect(typeof texto).toBe("string");
  });

  it("Intl.NumberFormat: muestra moneda", () => {
    // Organizar
    const precio = 3490;
    const formato = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    });

    // Acción
    const texto = formato.format(precio);

    // Esperado
    expect(texto).toContain("$");
    expect(texto).toContain("3");
  });
});
