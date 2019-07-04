import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate{

  constructor(private serUsuario: UsuarioService, private router:Router){

  }

  canActivate(){

    //aqui podriamos recibir el token y validarlo en el backend para cargar la ruta
    let usuario = this.serUsuario.getUsuarioLocalStorage();
    if(usuario){
      return true;
    }else{
      this.router.navigate(['home']);
      return false;
    }
  }

  
}
