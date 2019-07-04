import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{

  ngDoCheck(): void {
    if(this.serUsuario.getEmpresaActualLS()){
      this.empresa = this.serUsuario.getEmpresaActualLS()['em_nombre'];
    }
    if(this.serUsuario.getUsuarioLocalStorage()){
      this.empresas = this.serUsuario.getUsuarioLocalStorage()['empresa'];
    }
  }

  public app_nombre: string;
  @Input() empresa: string = '';
  public empresas = [];
  @Input('isLogeadoNavbar') isLogeado: boolean = false;
  @Output() userActivo:EventEmitter<boolean> = new EventEmitter();

  constructor(private serUsuario: UsuarioService, private router: Router) { 
    this.app_nombre = 'Dashboard - ';

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
    });
    
  }
  
  ngOnInit() {
    this.revisaUsuarioLogeado();
    if(this.serUsuario.getUsuarioLocalStorage()){
      this.empresas = this.serUsuario.getUsuarioLocalStorage()['empresa'];
      /* console.log(this.empresas[0].em_nombre);
      this.empresa = this.empresas[0].em_nombre; 
      this.cambiaEmpresa(this.empresas[0]); */
    }
  }

  salir(){
    this.serUsuario.cerrarSesion();
    this.router.navigate(['home']);
    this.revisaUsuarioLogeado();
    this.userActivo.emit(false);
    this.empresa = '';
  }

  revisaUsuarioLogeado() {
    if(!this.serUsuario.getUsuarioLocalStorage()){
      this.isLogeado = false;
    }else{
      this.isLogeado = true;
      this.empresa = this.serUsuario.getEmpresaActualLS().em_nombre;
    }
  }

  cambiaEmpresa(empresa){
    this.empresa = empresa.em_nombre;
    this.serUsuario.setEmpresaActualLS(empresa);
  }

}
