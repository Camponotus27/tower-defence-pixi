import { Color, Container, PointData, Sprite, Texture } from 'pixi.js'

export function herramientaDesarrolloPintarPuntos(
  container: Container,
  puntos: PointData[],
  color: 'red' | 'blue' | 'green',
  tamañoPX: number,
) {
  puntos.forEach((punto) => {
    container.addChild(
      new Sprite({
        texture: Texture.WHITE,
        position: punto,
        tint: new Color(color),
        width: tamañoPX,
        height: tamañoPX,
      }),
    )
  })
}
