import { AnimatedSprite, AnimatedSpriteFrames, Container, PointData, Ticker } from 'pixi.js'
import { Movimiento } from '../../../utils/movimiento'
import { SeguidorDeCaminos } from '../../../utils/seguidorDeCaminos'

export interface UnidadProps {
  camino: PointData[]
  frames?: AnimatedSpriteFrames
}

// Logica comun de una unidad, deberia ser capaz de moverse, atacar, morir, estar quieto, etc
export class Unidad extends Container {
  public animateSrinte: AnimatedSprite
  private seguidorDeCaminos: SeguidorDeCaminos
  private movimiento: Movimiento
  velocidad: number = 1
  vida: number = 1000
  constructor({ camino, frames }: UnidadProps) {
    super() // esto llama al constructor de Container

    this.movimiento = new Movimiento(this.velocidad)

    this.animateSrinte = new AnimatedSprite(frames || [])
    this.animateSrinte.animationSpeed = 10 / 60
    this.animateSrinte.anchor.set(0.5)
    this.animateSrinte.visible = false
    this.addChild(this.animateSrinte)

    this.seguidorDeCaminos = new SeguidorDeCaminos({
      puntos: camino,
      variacion: 10,
    })

    const objetivo = this.seguidorDeCaminos.objetivo
    if (objetivo) {
      this.position = objetivo
    }
  }
  seguirRuta(puntos: PointData[], loop = false) {
    this.seguidorDeCaminos.setRuta(puntos, loop)
  }

  caminarA(target: PointData) {
    this.seguidorDeCaminos.setRuta([target], false)
  }

  public update(_time: Ticker) {
    if (!this.animateSrinte.visible) return

    const objetivo = this.seguidorDeCaminos.objetivo
    if (!objetivo) return

    const llego = this.movimiento.caminar(this, objetivo, _time, 0.5)
    if (llego) this.seguidorDeCaminos.avanzar()
  }

  public generate() {
    this.animateSrinte.visible = true
    this.animateSrinte.play()
  }
}
