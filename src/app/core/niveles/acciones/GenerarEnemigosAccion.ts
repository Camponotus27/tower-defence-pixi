import { ContextoNivel } from "../cargador/ContextoNivel";
import { AccionNivel } from "../cargador/ManejadorEventosNivel";

export class GenerarEnemigosAccion implements AccionNivel {
  getNombre(): string {
    return "GenerarEnemigosAccion";
  }

  update(tiempoJuegoMS: number, contexto: ContextoNivel): boolean {
    this.contextoJuego.entities.forEach((entidad) => {
      switch (entidad.type) {
        case "base_tower":
      }
    });

    contexto.creadorTorres.aplicaATodasLasUnidades((u) => {
      u.fijarObjetivosDeDisparo(contexto.creadorEnemigos.obtenerUnidades());
    });

    /*contexto.paths.forEach((pathDef) => {
          herramientaDesarrolloPintarPuntos(this.contenedorJuegoPrincipal, pathDef.points, "red", 15);
        });*/

    //this.creadorEnemigos.generarGrupoUnidadesActivas(30, 800);

    manejadorDeTorres.forEach((manejador) => {
      const baseTorre = new BaseTorre(this.contenedorJuegoPrincipal);
      baseTorre.position = manejador.ubicacion;
      baseTorre.generate();

      baseTorre.on("pointerdown", () => {
        if (manejador.construido === true) {
          console.log("aqui ya hay una torre");
          return;
        }
        if (this.monedas < 100) {
          console.log("no tienes suficientes monedas");
          return;
        }

        const torre = contexto.creadorTorres.obtener(true);
        torre.position = manejador.ubicacion;
        torre.generate();

        manejador.construido = true;
        if (manejador.construido === true) {
          this.monedas -= 100;
        }
        engine().audio.sfx.play("main/sounds/sfx-hover.wav", { volume: 0.6 });
      });

      this.contenedorJuegoPrincipal.addChild(baseTorre);
    });
  }
}
