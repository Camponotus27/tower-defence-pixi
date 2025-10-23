import { AnimatedSprite, Container, PointData } from "pixi.js";
import { getFrame } from "../../utils/sprite";

export class Torre extends Container {
  public Asprite: AnimatedSprite;

  constructor(framesJson: string, ubicacion: PointData) {
    super();
    this.Asprite = new AnimatedSprite(getFrame(framesJson));
    this.Asprite.position = ubicacion;
    this.Asprite.animationSpeed = 10 / 100;
    this.Asprite.anchor.set(0.5, 1);
    this.Asprite.visible = true;
    this.Asprite.play();
    this.addChild(this.Asprite);
  }
}
