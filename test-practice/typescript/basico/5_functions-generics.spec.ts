import { describe, expect, it } from "vitest";

describe("🧮 Funciones y genéricos (AAA)", () => {
  it("parámetros por defecto", () => {
    // Organizar
    const saludar = (nombre = "invitado") => `Hola, ${nombre}`;

    // Acción
    const saludo1 = saludar("Camila");
    const saludo2 = saludar();

    // Esperado
    expect(saludo1).toBe("Hola, Camila");
    expect(saludo2).toBe("Hola, invitado");
  });

  it("parámetros opcionales", () => {
    // Organizar
    const sumar = (a: number, b?: number) => (b ? a + b : a);

    // Acción
    const conDos = sumar(3, 2);
    const soloUno = sumar(5);

    // Esperado
    expect(conDos).toBe(5);
    expect(soloUno).toBe(5);
  });

  it("usa el operador rest", () => {
    // Organizar
    const sumarTodo = (...nums: number[]) => nums.reduce((acc, n) => acc + n, 0);

    // Acción
    const total = sumarTodo(1, 2, 3, 4);

    // Esperado
    expect(total).toBe(10);
  });

  it("usa un genérico simple", () => {
    // Organizar
    function envolver<T>(valor: T) {
      return { valor };
    }

    // Acción
    const resultado = envolver("hola");

    // Esperado
    expect(resultado.valor).toBe("hola");
  });
});
