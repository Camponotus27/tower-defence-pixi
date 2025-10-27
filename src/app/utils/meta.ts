import { PointData } from "pixi.js";
import { Unidad } from "../screens/main/unidades/unidad";
import { herramientaDesarrolloPintarPuntos } from "./herramietasDesarrollo";
import { Container } from "pixi.js";


export class Meta extends Container{
    public container: Container;

    constructor()
    {
        super();
        this.container = new Container();

        const meta = [{ x: 200, y: 0 }]

        herramientaDesarrolloPintarPuntos(this.container, meta, "blue", 10);

        function Colision(Acolision: PointData , Bcolision: PointData)
        {
            const meta = Acolision;
            const Unidad = Bcolision;

            return meta.x + meta.x > Unidad.x &&
                   meta.x < Unidad.x + meta.x &&
                   meta.y + meta.y > Unidad.y &&
                   meta.y < Unidad.y + meta.y;
        }
    }
}