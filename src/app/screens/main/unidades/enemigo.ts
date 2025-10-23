import { PointData } from "pixi.js";
import { Unidad, UnidadProps } from "./unidad";

export interface EnemigoProps {
  camino: PointData[];
  framesJson?: string;
}

export class Enemigo extends Unidad {
  constructor(opciones: EnemigoProps) {
    const framesJson = opciones.framesJson ?? "goblin scout - silhouette all animations-run.json";

    const opcionesUnidad: UnidadProps = {
      camino: opciones.camino,
      framesJson,
    };
    super(opcionesUnidad); // Esto llama al constructor de Unidad
  }
}
