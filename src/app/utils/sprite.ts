import { AnimatedSpriteFrames, Assets, Spritesheet, Texture } from "pixi.js";

type FrameRow = { filename: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache: { [key: string]: any } = [];

/**
 * Verifica si un valor tiene formato de array tipo Aseprite
 * (Ejemplo: [{ filename: "run #0.aseprite" }, ...])
 */
const esArrayAseprite = (x: unknown): x is FrameRow[] => {
  return Array.isArray(x) && (x.length === 0 || typeof x[0]?.filename === "string");
};

/**
 * Obtiene una secuencia ordenada de texturas desde un Spritesheet cargado con PIXI.Assets
 *
 * - Soporta JSON de Aseprite (array) y formato estándar de Pixi (objeto)
 * - Ordena los frames por el número final en el nombre del archivo
 * - Retorna un arreglo listo para AnimatedSprite
 */
export const getFrame = (
  assetId: string,
  patronNombreFrames: RegExp = /(\d+)\.(aseprite|png)$/,
): AnimatedSpriteFrames => {
  const resultCac = cache[assetId];
  if (resultCac) {
    return resultCac;
  }

  const sheet = Assets.get<Spritesheet>(assetId);

  if (!sheet) {
    throw new Error(`Spritesheet "${assetId}" no encontrado o no cargado.`);
  }

  const raw = sheet.data.frames;

  const frames: FrameRow[] = esArrayAseprite(raw)
    ? raw
    : Object.keys(raw as Record<string, unknown>).map((name) => ({ filename: name }));

  const parsed = frames
    .map((f, i) => {
      const match = f.filename.match(patronNombreFrames);
      const id = match ? Number(match[1]) : -1; // -1 = frame no válido
      return { name: f.filename, index: String(i), id };
    })
    .filter((f) => f.id !== -1); // ignoramos los que no cumplan el patrón

  const textures = parsed
    .sort((a, b) => a.id - b.id)
    .map((f) => {
      return sheet.textures[f.index] ?? sheet.textures[f.name];
    })
    .filter((t): t is Texture => t !== undefined);

  // guardar en caché
  cache[assetId] = textures;
  return textures;
};
