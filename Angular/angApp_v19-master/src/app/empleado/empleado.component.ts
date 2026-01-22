import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  title:string = 'Hola Caracola desde empleado';
  public empleado!: Empleado;  // El ! es como inicializarlo a null
  public empleadoExt!:Empleado;
  public totalEmpleados:Array<Empleado>=[];
  public trabajadorExterno:boolean = true;

  constructor(){
    this.empleado = new Empleado('Paco', 34,'oficial', true);
    this.empleadoExt = new Empleado('Ana', 34,'nada', false);
    this.totalEmpleados = [new Empleado('Pepe', 32, 'peon', true)];
    this.totalEmpleados.push(this.empleado);

  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }
}
