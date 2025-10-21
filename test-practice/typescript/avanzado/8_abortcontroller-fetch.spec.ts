import { describe, expect, it } from "vitest";

describe("🌐 AbortController + fetch simulado (AAA)", () => {
  it("simula una petición abortable", async () => {
    // Organizar
    const controlador = new AbortController();
    const { signal } = controlador;

    const fetchSimulado = (signal: AbortSignal) =>
      new Promise<string>((resolve, reject) => {
        const timer = setTimeout(() => resolve("✅ completado"), 100);
        signal.addEventListener("abort", () => {
          clearTimeout(timer);
          reject(new Error("❌ abortado"));
        });
      });

    // Acción
    const promesa = fetchSimulado(signal);
    controlador.abort(); // cancelar de inmediato

    // Esperado
    await expect(promesa).rejects.toThrow("❌ abortado");
  });

  it("Promise.race: gana la respuesta más rápida", async () => {
    // Organizar
    const lento = new Promise((res) => setTimeout(() => res("lento"), 100));
    const rapido = new Promise((res) => setTimeout(() => res("rápido"), 10));

    // Acción
    const ganador = await Promise.race([lento, rapido]);

    // Esperado
    expect(ganador).toBe("rápido");
  });
});
