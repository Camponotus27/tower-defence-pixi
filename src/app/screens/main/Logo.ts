import { Sprite, Texture } from "pixi.js";

import {
  randomBool,
  randomFloat,
  randomInt,
} from "../../../engine/utils/random";

export enum DIRECTION {
  NE,
  NW,
  SE,
  SW,
}

export class Logo extends Sprite {
  public direction!: DIRECTION;
  public speed!: number;

  get left() {
    return -this.width * 0.5;
  }

  get right() {
    return this.width * 0.5;
  }

  get top() {
    return -this.height * 0.5;
  }

  get bottom() {
    return this.height * 0.5;
  }

  constructor() {
    const tex = randomBool() ? "Tower 02.png" : "Tower 03.png";
    super({ texture: Texture.from(tex), anchor: 1, scale: 1.3});
    this.direction = randomInt(0, 3);
    this.speed = randomFloat(1, 6);
  }
}
