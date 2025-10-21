import { describe, expect, it } from "vitest";

describe("🧩 Arrays — ejemplos con estructura clara (AAA)", () => {
  it("map: transforma cada elemento (x2)", () => {
    // Organizar
    const entrada = [1, 2, 3];

    // Acción
    const salida = entrada.map((n) => n * 2);

    // Esperado
    expect(salida).toEqual([2, 4, 6]); // cada valor se multiplicó por dos
    expect(entrada).toEqual([1, 2, 3]); // map no muta
  });

  it("filter: conserva solo pares", () => {
    // Organizar
    const numeros = [1, 2, 3, 4];

    // Acción
    const pares = numeros.filter((n) => n % 2 === 0);

    // Esperado
    expect(pares).toEqual([2, 4]);
  });

  it("reduce: acumula la suma total", () => {
    // Organizar
    const numeros = [1, 2, 3];

    // Acción
    const total = numeros.reduce((acc, n) => acc + n, 0);

    // Esperado
    expect(total).toBe(6);
  });

  it("find: obtiene el primer número mayor a 10", () => {
    // Organizar
    const numeros = [5, 9, 12];

    // Acción
    const encontrado = numeros.find((n) => n > 10);

    // Esperado
    expect(encontrado).toBe(12);
  });

  it("some / every: evalúa condiciones sobre los elementos", () => {
    // Organizar
    const nums = [2, 4, 6];

    // Acción
    const algunoEsPar = nums.some((n) => n % 2 === 0);
    const todosSonPares = nums.every((n) => n % 2 === 0);

    // Esperado
    expect(algunoEsPar).toBe(true);
    expect(todosSonPares).toBe(true);
  });

  it("flatMap: mapea y aplana resultados", () => {
    // Organizar
    const frases = ["a b", "c"];

    // Acción
    const palabras = frases.flatMap((f) => f.split(" "));

    // Esperado
    expect(palabras).toEqual(["a", "b", "c"]);
  });

  it("sort: ordena descendente sin mutar el original", () => {
    // Organizar
    const original = [3, 1, 4];

    // Acción
    const ordenado = [...original].sort((a, b) => b - a);

    // Esperado
    expect(ordenado).toEqual([4, 3, 1]);
    expect(original).toEqual([3, 1, 4]);
  });

  it("slice vs splice: inmutable vs mutable", () => {
    // Organizar
    const base = [10, 20, 30, 40];

    // Acción
    const parte = base.slice(1, 3);
    const copia = [...base];
    const removidos = copia.splice(1, 2, 99);

    // Esperado
    expect(parte).toEqual([20, 30]);
    expect(removidos).toEqual([20, 30]);
    expect(copia).toEqual([10, 99, 40]);
  });

  it("push/pop/shift/unshift: modifican extremos del array", () => {
    // Organizar
    const arr = [2, 3];

    // Acción
    arr.push(4);
    const ultimo = arr.pop();
    arr.unshift(1);
    const primero = arr.shift();

    // Esperado
    expect(primero).toBe(1);
    expect(ultimo).toBe(4);
    expect(arr).toEqual([2, 3]);
  });

  it("includes/join/concat: búsqueda, texto y unión", () => {
    // Organizar
    const bebidas = ["café", "té"];

    // Acción
    const tieneTe = bebidas.includes("té");
    const union = bebidas.concat(["mate"]);
    const texto = union.join(" / ");

    // Esperado
    expect(tieneTe).toBe(true);
    expect(union).toEqual(["café", "té", "mate"]);
    expect(texto).toBe("café / té / mate");
  });
});
