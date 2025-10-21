import { describe, expect, it } from "vitest";

describe("🧩 Conditional Types + infer + utilitarios (AAA)", () => {
  it("conditional type simple: extrae promesa interna", () => {
    // Organizar
    type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

    // Acción
    type A = UnwrapPromise<Promise<number>>; // number
    type B = UnwrapPromise<string>; // string

    // Esperado
    const aOk: A = 123;
    const bOk: B = "hola";
    expect(aOk).toBe(123);
    expect(bOk).toBe("hola");
  });

  it("ReturnType / Parameters: obtienen tipos de funciones", () => {
    // Organizar
    function sumar(a: number, b: number) {
      return a + b;
    }

    // Acción
    type R = ReturnType<typeof sumar>; // number
    type P = Parameters<typeof sumar>; // [number, number]

    // Esperado
    const rOk: R = 7;
    const pOk: P = [3, 4];
    expect(rOk).toBe(7);
    expect(pOk).toEqual([3, 4]);
  });

  it("InstanceType: tipo de la instancia de una clase", () => {
    // Organizar
    class Servicio {
      nombre = "Oasis";
    }
    type S = InstanceType<typeof Servicio>;

    // Acción
    const s: S = new Servicio();

    // Esperado
    expect(s.nombre).toBe("Oasis");
  });

  it("infer para extraer tuplas de un callback típico", () => {
    // Organizar
    type Callback = (err: Error | null, data?: string) => void;
    type CallbackParams<T> = T extends (err: infer E, data?: infer D) => void ? [E, D?] : never;

    // Acción
    type Params = CallbackParams<Callback>; // [Error | null, string?]
    const ejemplo: Params = [null, "ok"];

    // Esperado
    expect(ejemplo[0]).toBeNull();
    expect(ejemplo[1]).toBe("ok");
  });
});
