import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:boolean;
  public error:boolean;
  @Output() logeado:EventEmitter<boolean> = new EventEmitter();

  constructor(private serUsuario: UsuarioService, private router: Router) { }

  public usuario:UsuarioInterface = {
    correo : '',
    clave : ''
  }

  ngOnInit() {
  }

  loginUsuario(){
    this.login = true;
    this.serUsuario.loginUsuario(this.usuario.correo, this.usuario.clave).subscribe(data => {
      this.login = false;

      if(data['ok']){
        this.serUsuario.setUsuarioLocalStorage(data['user']);
        /* this.serUsuario.setTokenLocalStorage(data['token']); */
        this.router.navigate(['/home']);
        this.logeado.emit(true);
      }
    }, err => {
      this.login = false;
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    });
  }

}
