import { describe, expect, it } from "vitest";

describe("⚙️ Tipos básicos e inferencia en TypeScript (AAA)", () => {
  it("tipos primitivos", () => {
    // Organizar
    const nombre: string = "Camila";
    const edad: number = 28;
    const activo: boolean = true;

    // Acción
    const mensaje = `${nombre} tiene ${edad} años, activo: ${activo}`;

    // Esperado
    expect(mensaje).toBe("Camila tiene 28 años, activo: true");
  });

  it("inferencia de tipos automática", () => {
    // Organizar
    const saludo = "Hola"; // TS infiere string
    const cantidad = 5; // TS infiere number

    // Acción
    const resultado = `${saludo} (${typeof cantidad})`;

    // Esperado
    expect(resultado).toBe("Hola (number)");
  });

  it("casting o 'as' para convertir tipos", () => {
    // Organizar
    const valor: unknown = "123";

    // Acción
    const numero = Number(valor as string);

    // Esperado
    expect(numero).toBe(123);
  });

  it("usa enum para representar opciones limitadas", () => {
    // Organizar
    enum Estado {
      Activo = "activo",
      Inactivo = "inactivo",
    }

    // Acción
    const estadoActual: Estado = Estado.Activo;

    // Esperado
    expect(estadoActual).toBe("activo");
  });
});
