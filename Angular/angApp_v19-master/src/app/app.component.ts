import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoDAWComponentComponent } from './alumnado-dawcomponent/alumnado-dawcomponent.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, EmpleadoComponent, AlumnadoDAWComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
