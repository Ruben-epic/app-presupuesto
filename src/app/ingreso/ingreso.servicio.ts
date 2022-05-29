import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingreso:Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("venta de coche", 500)
    ]

    eliminar(ingreso:Ingreso){
        const indice:number = this.ingreso.indexOf(ingreso)
        this.ingreso.splice(indice, 1)
    }
}