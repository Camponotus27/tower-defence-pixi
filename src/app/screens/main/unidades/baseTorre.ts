import { Unidad, UnidadProps } from "./unidad";

export interface BaseTorreProps {
  framesJson?: string;
}

export class BaseTorre extends Unidad {
  constructor(opciones: BaseTorreProps) {
    const framesJson = opciones.framesJson ?? "suelo-torre.json";

    const opcionesUnidad: UnidadProps = {
      camino: [],
      framesJson,
    };
    super(opcionesUnidad); // Esto llama al constructor de Unidad
  }
}
