import { describe, expect, it } from "vitest";

describe("📦 Módulos — export/import en TypeScript (AAA)", () => {
  it("ejemplo de export/import (forma real en archivos separados)", () => {
    // Organizar (forma real en tu repo)
    //
    // // utils/suma.ts
    // export function suma(a: number, b: number) {
    //   return a + b;
    // }
    //
    // // servicios/calculos.ts
    // import { suma } from "../utils/suma";
    // export const total = (xs: number[]) => xs.reduce(suma, 0);
    //
    // // en el test o en tu app
    // import { total } from "./servicios/calculos";
    // expect(total([1,2,3])).toBe(6);

    // Acción (versión inline equivalente para ejecutar aquí)
    const suma = (a: number, b: number) => a + b;
    const total = (xs: number[]) => xs.reduce(suma, 0);

    // Esperado
    expect(total([1, 2, 3])).toBe(6);
  });

  it("export default vs export nombrado (concepto)", () => {
    // Organizar (forma real en tu repo)
    //
    // // math/area.ts
    // export default function areaCuadrado(lado: number) { return lado * lado; }
    // export function areaRectangulo(a: number, b: number) { return a * b; }
    //
    // // uso:
    // import areaCuadrado, { areaRectangulo } from "./math/area";
    //
    // Acción (inline para ejecutar)
    const areaCuadrado = (lado: number) => lado * lado;
    const areaRectangulo = (a: number, b: number) => a * b;

    // Esperado
    expect(areaCuadrado(3)).toBe(9);
    expect(areaRectangulo(2, 4)).toBe(8);
  });
});
