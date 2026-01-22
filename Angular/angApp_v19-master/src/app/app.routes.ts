import { Routes } from '@angular/router';
import { AlumnadoDAWComponentComponent } from './alumnado-dawcomponent/alumnado-dawcomponent.component';
import { EmpleadoComponent } from './empleado/empleado.component';



export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'Alumnado', component: AlumnadoDAWComponentComponent}, //Por defecto es prefix
    {path:'Empleados', component: EmpleadoComponent},
    {path:'**', redirectTo:'home', pathMacth:'full'}

];
