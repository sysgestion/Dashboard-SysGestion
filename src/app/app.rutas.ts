import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { Sp1076Component } from './componentes/sp1076/sp1076.component';



const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/registro', component: RegistroComponent },
    { path: 'usuario/login', component: LoginComponent },
    { path: 'consulta/sp1076', component: Sp1076Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } //aqui ira el componente 404
];

//, { enableTracing: true }  registra movimientos de rutas en la consola del navegador
export const APP_RUTAS = RouterModule.forRoot(RUTAS);