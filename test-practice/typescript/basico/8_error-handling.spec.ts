import { describe, expect, it } from "vitest";

describe("🧯 Manejo de errores — try/catch/finally, throw, errores custom (AAA)", () => {
  it("try/catch: captura un error lanzado con throw", () => {
    // Organizar
    const dividir = (a: number, b: number) => {
      if (b === 0) throw new Error("División por cero");
      return a / b;
    };

    // Acción
    const exito = dividir(10, 2);
    let mensajeError = "";
    try {
      dividir(10, 0);
    } catch (e) {
      mensajeError = (e as Error).message;
    }

    // Esperado
    expect(exito).toBe(5);
    expect(mensajeError).toBe("División por cero");
  });

  it("finally: siempre se ejecuta", () => {
    // Organizar
    const pasos: string[] = [];

    // Acción
    try {
      pasos.push("try");
      throw new Error("Fallo");
    } catch {
      pasos.push("catch");
    } finally {
      pasos.push("finally");
    }

    // Esperado
    expect(pasos).toEqual(["try", "catch", "finally"]);
  });

  it("errores custom con clases y instanceof", () => {
    // Organizar
    class ValidacionError extends Error {
      constructor(msg: string) {
        super(msg);
        this.name = "ValidacionError";
      }
    }

    const validarEdad = (edad: number) => {
      if (edad < 0) throw new ValidacionError("Edad inválida");
      return true;
    };

    // Acción
    let tipoCapturado = "";
    try {
      validarEdad(-1);
    } catch (e) {
      if (e instanceof ValidacionError) tipoCapturado = "ValidacionError";
    }

    // Esperado
    expect(tipoCapturado).toBe("ValidacionError");
  });

  it("promesas: rechazo y manejo con catch/await", async () => {
    // Organizar
    const fallarAsync = () => Promise.reject(new Error("Falla async"));

    // Acción
    let mensaje = "";
    try {
      await fallarAsync();
    } catch (e) {
      mensaje = (e as Error).message;
    }

    // Esperado
    expect(mensaje).toBe("Falla async");
  });
});
