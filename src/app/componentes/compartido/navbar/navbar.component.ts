import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app_nombre: string = "Dashboard Sys";
  @Input('isLogeadoNavbar') isLogeado: boolean = false;
  @Output() userActivo:EventEmitter<boolean> = new EventEmitter();

  constructor(private serUsuario: UsuarioService, private router: Router) { 
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
    });
  }

  ngOnInit() {
    this.revisaUsuarioLogeado();
  }

  salir(){
    this.serUsuario.cerrarSesion();
    this.router.navigate(['home']);
    this.revisaUsuarioLogeado();
    this.userActivo.emit(false);
  }

  revisaUsuarioLogeado() {
    if(!this.serUsuario.getUsuarioLocalStorage()){
      this.isLogeado = false;
    }else{
      this.isLogeado = true;
    }
  }

}
