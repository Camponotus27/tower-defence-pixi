import { Container, PointData, Ticker } from "pixi.js";
import { Unidad, UnidadProps } from "./unidades/unidad";

interface CreadorUnidadesProps {
  contenedor: Container;
  cantidad: number;
  retrasoAparicionMS: number;
  unidad: new (opciones: UnidadProps) => Unidad;
  camino: PointData[];
}

// Clase creadora de unidesdes, es capaz de crear ordas
export class CreadorUnidades {
  private unidades: Unidad[];
  private contenedor: Container;
  private retrasoAparicionMS: number;

  constructor({
    contenedor,
    camino,
    unidad,
    cantidad,
    retrasoAparicionMS,
  }: CreadorUnidadesProps) {
    this.retrasoAparicionMS = retrasoAparicionMS;
    this.contenedor = contenedor;

    // Crea las unidades invisibles las ingresa al contendor y ademas las conserva en una variable interna
    this.unidades = [];
    for (let i = 0; i < cantidad; i++) {
      const nuevaUnidad = new unidad({ camino });
      this.unidades.push(nuevaUnidad);
      this.contenedor.addChild(nuevaUnidad);
    }
  }
  public generarGrupoUnidades() {
    let index = 1;
    this.unidades.forEach((unidad) => {
      setTimeout(() => {
        unidad.generate();
      }, index * this.retrasoAparicionMS);
      index++;
    });
  }

  public update(_time: Ticker) {
    this.unidades.forEach((unidad) => unidad.update(_time));
  }
}
