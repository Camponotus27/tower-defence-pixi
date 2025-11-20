import { Container, Graphics, PointData } from "pixi.js";

export function herramientaDesarrolloPintarPuntos(
  container: Container,
  puntos: PointData[],
  color: "red" | "blue" | "green",
  tamañoPX: number,
) {
  puntos.forEach((punto) => {
    container.addChild(new Graphics().circle(punto.x, punto.y, tamañoPX).fill(color));
  });
}
