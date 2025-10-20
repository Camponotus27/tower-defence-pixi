import { AnimatedSpriteFrames, Assets, Spritesheet, Texture } from 'pixi.js'

export const getFrame = (
  identificadorAssets: string,
  patronNombreFrames: RegExp = /(\d+)\.aseprite$/,
): AnimatedSpriteFrames => {
  const sheet = Assets.get<Spritesheet>(identificadorAssets)

  if (!sheet) {
    throw new Error(`Spritesheet "${identificadorAssets}" no encontrado o no cargado.`)
  }

  const names = Object.keys(sheet.data.frames)
    .filter((n) => patronNombreFrames.test(n))
    .sort((a, b) => {
      const na = Number(a.match(patronNombreFrames)?.[1] ?? 0)
      const nb = Number(b.match(patronNombreFrames)?.[1] ?? 0)
      return na - nb
    })

  const frames: Texture[] = names
    .map((name) => sheet.textures[name])
    .filter((texture): texture is Texture => texture !== undefined)

  return frames
}
