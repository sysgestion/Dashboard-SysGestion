import { Component, Input } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'cliente-dashboard-sys';
  public app_nombre: string = "SysGestion";
  public logeadoPadre:boolean = false;

  constructor() { }
  
  /* este es el evento que usa el navbar cuando el usuario cierra sesion a traves del evento que emite*/
  isLogeadoPadre(evento){
    this.logeadoPadre = evento;
  }
  
  onActivate(componenteQueEntra){
    /* si el componente que entra es el login, nos subscribimos el evento que genera el output y actualizamos el login del padre que sera el que recibe el navbar como input */
    if(componenteQueEntra.constructor.name === 'LoginComponent'){
      componenteQueEntra.logeado.subscribe(data =>{
        this.logeadoPadre = data;
      })
    }
  }

}
