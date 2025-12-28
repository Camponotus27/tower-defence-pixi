import { engine } from "../../../getEngine";
import { ContextoNivel } from "../cargador/ContextoNivel";
import { AccionNivel } from "../cargador/ManejadorEventosNivel";

export class GenerarEntidadesAccion implements AccionNivel {
  getNombre(): string {
    return "GenerarEntidadesAccion";
  }

  update(_: number, contexto: ContextoNivel): boolean {
    contexto.entities.forEach((entidad) => {
      switch (entidad.type) {
        case "base_tower":
          const baseTorre = contexto.creadorBaseTorres.obtener();
          baseTorre.position = { x: entidad.x, y: entidad.y };
          baseTorre.generate();

          baseTorre.on("pointerdown", () => {
            if (baseTorre.construida === true) {
              contexto.mostrarMensaje("Aqui ya hay una torre");
              return;
            }
            if (contexto.monedas < 100) {
              contexto.mostrarMensaje("No tienes suficientes monedas");
              return;
            }

            const torre = contexto.creadorTorres.obtener(true);
            torre.position = baseTorre.position;
            torre.generate();

            baseTorre.construida = true;
            if (baseTorre.construida === true) {
              contexto.monedas -= 100;
            }
            engine().audio.sfx.play("main/sounds/sfx-hover.wav", { volume: 0.6 });
          });
      }
    });

    contexto.creadorTorres.aplicaATodasLasUnidades((u) => {
      u.fijarObjetivosDeDisparo(contexto.creadorEnemigos.obtenerUnidades());
    });

    /*contexto.paths.forEach((pathDef) => {
          herramientaDesarrolloPintarPuntos(this.contenedorJuegoPrincipal, pathDef.points, "red", 15);
        });*/

    //this.creadorEnemigos.generarGrupoUnidadesActivas(30, 800);

    return true;
  }
}
