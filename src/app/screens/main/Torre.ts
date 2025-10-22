import { PointData, Sprite, Texture } from "pixi.js";

export class Torre extends Sprite {
  constructor(posicion: PointData) {
    const tex = "Tower 02.png";
    super({position: posicion ,texture: Texture.from(tex), anchor: 0.5, scale: 1.3 });//"super" es el constructor de sprite
  }
}
