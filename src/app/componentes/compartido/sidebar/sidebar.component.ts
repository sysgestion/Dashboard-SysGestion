import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /* public empresas = []; */
  @Input('isLogeadoSidebar') isLogeado: boolean = false;

  constructor(private serUsuario: UsuarioService) {
    /* if(this.serUsuario.getUsuarioLocalStorage()){
      this.empresas = this.serUsuario.getUsuarioLocalStorage()['empresa'];
    }
    console.log(this.empresas); */
  }

  ngOnInit() {
    this.revisaUsuarioLogeado();
  }

  revisaUsuarioLogeado() {
    if(!this.serUsuario.getUsuarioLocalStorage()){
      this.isLogeado = false;
    }else{
      this.isLogeado = true;
    }
  }
  
  

}
