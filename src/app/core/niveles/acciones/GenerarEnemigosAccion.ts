import { ContextoNivel } from "../cargador/ContextoNivel";
import { AccionNivel } from "../cargador/ManejadorEventosNivel";

export class GenerarEnemigosAccion implements AccionNivel {
  constructor(
    private cantidad: number,
    private inverval: number,
    private camino: string,
  ) {}

  getNombre(): string {
    return "GenerarEnemigosAccion";
  }

  update(_: number, contexto: ContextoNivel): boolean {
    for (let i = 0; i < this.cantidad; i++) {
      setTimeout(() => {
        const unidad = contexto.creadorEnemigos.obtener();

        const caminoSelecionado = contexto.paths.find((c) => {
          return c.id === this.camino;
        });

        if (!caminoSelecionado) {
          contexto.mostrarMensaje("No se coneotro el camino selecinado");
          return;
        }

        unidad.inicializarSeguidorDeObjetivos({
          objetivos: caminoSelecionado.points,
        });

        unidad.generate();
      }, i * this.inverval);
    }

    const enemigos = contexto.creadorEnemigos.obtenerUnidades();
    contexto.creadorTorres.aplicaATodasLasUnidades((torre) => {
      torre.fijarObjetivosDeDisparo(enemigos);
    });

    return true;
  }
}
