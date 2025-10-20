import { AnimatedSpriteFrames, Assets, Spritesheet, Texture } from 'pixi.js'

export const getFrame = (
  assetKey: string,
  pattern: RegExp = /(\d+)\.aseprite$/, // patron de los nombres de
): AnimatedSpriteFrames => {
  const sheet = Assets.get<Spritesheet>(assetKey)

  if (!sheet) {
    throw new Error(`Spritesheet "${assetKey}" no encontrado o no cargado.`)
  }

  const names = Object.keys(sheet.data.frames)
    .filter((n) => pattern.test(n))
    .sort((a, b) => {
      const na = Number(a.match(pattern)?.[1] ?? 0)
      const nb = Number(b.match(pattern)?.[1] ?? 0)
      return na - nb
    })

  const frames: Texture[] = names
    .map((name) => sheet.textures[name])
    .filter((texture): texture is Texture => texture !== undefined)

  return frames
}
