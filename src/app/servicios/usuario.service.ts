import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _headers:HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  loginUsuario(correo:string, clave:string){
    let headers = this._headers.append('Content-Type', 'application/json');
    
    return this.http.post('https://dashboard-sysgestion.herokuapp.com/login', {correo, clave}, {headers});
  }

  setUsuarioLocalStorage(usuario){
    let usuario_string = JSON.stringify(usuario);
    localStorage.setItem('currentUser', usuario_string);
  }

  setTokenLocalStorage(token){
    localStorage.setItem('accessToken', token);
  }

  getTokenLocalStorage(){
    return localStorage.getItem('accessToken');
  }

  getUsuarioLocalStorage(){
    let usuario_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(usuario_string)){
      let usuario:UsuarioInterface = JSON.parse(usuario_string);
      return usuario;
    }else{
      return null;
    }
  }

  cerrarSesion(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

}
