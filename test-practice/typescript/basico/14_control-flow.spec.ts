import { describe, expect, it } from "vitest";

describe("🌀 Estructuras de control — condicionales, loops y flujo (AAA)", () => {
  it("if / else if / else", () => {
    // Organizar
    const temperatura = 32;

    // Acción
    let estado = "";
    if (temperatura > 30) estado = "calor";
    else if (temperatura >= 15) estado = "templado";
    else estado = "frío";

    // Esperado
    expect(estado).toBe("calor");
  });

  it("switch: selecciona por caso", () => {
    // Organizar
    const dia: string = "sábado";

    // Acción
    let tipo = "";
    switch (dia) {
      case "lunes":
      case "martes":
      case "miércoles":
      case "jueves":
      case "viernes":
        tipo = "laboral";
        break;
      case "sábado":
      case "domingo":
        tipo = "fin de semana";
        break;
      default:
        tipo = "desconocido";
    }

    // Esperado
    expect(tipo).toBe("fin de semana");
  });

  it("operadores lógicos AND / OR / NOT", () => {
    // Organizar
    const esCliente = true;
    const tieneDescuento = false;
    const cupón = true;

    // Acción
    const puedeComprar = esCliente && (tieneDescuento || cupón);
    const restringido = !esCliente;

    // Esperado
    expect(puedeComprar).toBe(true);
    expect(restringido).toBe(false);
  });

  it("for: recorre una cantidad fija", () => {
    // Organizar
    const numeros = [1, 2, 3];
    let suma = 0;

    // Acción
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }

    // Esperado
    expect(suma).toBe(6);
  });

  it("for...of: recorre valores de un array", () => {
    // Organizar
    const letras = ["a", "b", "c"];
    let resultado = "";

    // Acción
    for (const letra of letras) {
      resultado += letra;
    }

    // Esperado
    expect(resultado).toBe("abc");
  });

  it("for...in: recorre claves de un objeto", () => {
    // Organizar
    const cafe = { tipo: "espresso", precio: 2000 };
    const claves: string[] = [];

    // Acción
    for (const k in cafe) {
      claves.push(k);
    }

    // Esperado
    expect(claves).toContain("tipo");
    expect(claves).toContain("precio");
  });

  it("while: repite mientras una condición sea verdadera", () => {
    // Organizar
    let n = 3;
    let resultado = 1;

    // Acción
    while (n > 0) {
      resultado *= n;
      n--;
    }

    // Esperado
    expect(resultado).toBe(6); // factorial de 3
  });

  it("do...while: ejecuta al menos una vez", () => {
    // Organizar
    let contador = 0;
    let resultado = "";

    // Acción
    do {
      resultado += "X";
      contador++;
    } while (contador < 3);

    // Esperado
    expect(resultado).toBe("XXX");
  });

  it("break: interrumpe el bucle", () => {
    // Organizar
    const numeros = [1, 2, 3, 4, 5];
    let encontrado = 0;

    // Acción
    for (const n of numeros) {
      if (n === 3) {
        encontrado = n;
        break;
      }
    }

    // Esperado
    expect(encontrado).toBe(3);
  });

  it("continue: salta a la siguiente iteración", () => {
    // Organizar
    const nums = [1, 2, 3, 4];
    const pares: number[] = [];

    // Acción
    for (const n of nums) {
      if (n % 2 !== 0) continue;
      pares.push(n);
    }

    // Esperado
    expect(pares).toEqual([2, 4]);
  });

  it("return: termina la ejecución de una función", () => {
    // Organizar
    const buscar = (lista: string[], valor: string) => {
      for (const el of lista) {
        if (el === valor) return true;
      }
      return false;
    };

    // Acción
    const existe = buscar(["a", "b", "c"], "b");

    // Esperado
    expect(existe).toBe(true);
  });

  it("try + condicional: combina control y errores", () => {
    // Organizar
    const dividir = (a: number, b: number) => {
      if (b === 0) throw new Error("División por cero");
      return a / b;
    };

    // Acción
    let resultado: number | string;
    try {
      resultado = dividir(10, 2);
    } catch (e) {
      resultado = (e as Error).message;
    }

    // Esperado
    expect(resultado).toBe(5);
  });
});
