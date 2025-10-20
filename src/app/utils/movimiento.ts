import { Container, PointData, Ticker } from 'pixi.js'

// Componente destinado a mover algo del punto A al B, debe ser llamado reiteradamente en un Ticket
export class Movimiento {
  constructor(public velocidad = 1) {}
  caminar(obj: Container, target: PointData, t: Ticker, eps = 0.5): boolean {
    const dx = target.x - obj.position.x
    const dy = target.y - obj.position.y
    const dist = Math.hypot(dx, dy)
    if (dist <= eps) {
      obj.position.set(target.x, target.y)
      return true
    }

    const step = this.velocidad * t.deltaTime
    if (step >= dist) {
      obj.position.set(target.x, target.y)
      return true
    }

    obj.position.set(obj.position.x + (dx / dist) * step, obj.position.y + (dy / dist) * step)
    return false
  }
}
