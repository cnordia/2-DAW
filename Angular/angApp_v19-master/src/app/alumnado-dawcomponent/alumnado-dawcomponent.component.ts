import { Component } from '@angular/core';
import { AlumnadoDAW } from './alumnado-daw';

@Component({
  selector: 'app-alumnado-dawcomponent',
  imports: [],
  templateUrl: './alumnado-dawcomponent.component.html',
  styleUrl: './alumnado-dawcomponent.component.css'
})
export class AlumnadoDAWComponentComponent {
  public alumnoPrimero!:AlumnadoDAW;
  public alumnoSegundo!:AlumnadoDAW;
  public totalAlumnos:Array<AlumnadoDAW>=[];
  public clasePrimero:boolean=false

  constructor(){
    this.alumnoPrimero = new AlumnadoDAW('Carlos', 'Norte', '234234', new Date(2006/8/27), 'Montequinto', 64471231, '2ºDAW', ['Servicios', 'Cliente'] );
    this.alumnoSegundo = new AlumnadoDAW('Dani', 'Down', '5674', new Date(2007/1/11), 'Montequinto', 64443531, '1ºDAW', ['Sistemas', 'Entorno'] );
    this.totalAlumnos.push(this.alumnoPrimero);
    this.totalAlumnos.push(this.alumnoSegundo)

  }

  cambiarClase(valor:boolean){
    this.clasePrimero = valor;
  }
  
}
