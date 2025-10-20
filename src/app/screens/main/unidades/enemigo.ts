import { AnimatedSpriteFrames, PointData } from 'pixi.js'
import { getFrame } from '../../../utils/sprite'
import { Unidad, UnidadProps } from './unidad'

export interface EnemigoProps {
  camino: PointData[]
  frames?: AnimatedSpriteFrames
}

export class Enemigo extends Unidad {
  constructor(opciones: EnemigoProps) {
    const frames: AnimatedSpriteFrames =
      opciones.frames ?? getFrame('goblin scout - silhouette all animations-run.json')

    const opcionesUnidad: UnidadProps = {
      camino: opciones.camino,
      frames: frames,
    }
    super(opcionesUnidad) // Esto llama al constructor de Unidad
  }
}
