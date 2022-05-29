import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent{

  egresos:Egreso[]=[]
  
  @Input() ingresoTotal:number

  constructor(private egresoSevicio:EgresoServicio) { 
    this.egresos = egresoSevicio.egresos
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoSevicio.eliminarEgreso(egreso)
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal
  }
}
