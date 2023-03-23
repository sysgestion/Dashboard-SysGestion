import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private _headers:HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private serUsuario: UsuarioService) { }

  getClientes( activos:number ) {
    let headers = this._headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    let emp = this.serUsuario.getEmpresaActualLS()['em_codigo'];

    params = params.append('emp', emp.toString());
    params = params.append('fecini', activos.toString());
    
    return this.http.get(`https://mssql-node.herokuapp.com/clientes`, {headers:headers, params: params});
    /* .pipe(map(data => {
      return data['data'];
    })); */
  }

  getNotaVenta( folio ) {
    let headers = this._headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    let emp = this.serUsuario.getEmpresaActualLS()['em_codigo'];
    
    params = params.append('emp', emp.toString());
    params = params.append('folio', folio.toString());
    
    //return this.http.get(`http://localhost:3000/notaventa`, {headers:headers, params: params});
    return this.http.get(`https://mssql-node.herokuapp.com/notaventa`, {headers:headers, params: params});
  }

  autorizaNV(estado, folio){
    
    let headers = this._headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    let emp = this.serUsuario.getEmpresaActualLS()['em_codigo'];
    
    params = params.append('emp', emp.toString());
    params = params.append('estado', estado.toString());
    params = params.append('folio', folio.toString());
    
    //return this.http.get(`http://localhost:3000/autorizarnotaventa`, {headers:headers, params: params});
    return this.http.get(`https://mssql-node.herokuapp.com/autorizarnotaventa`, {headers:headers, params: params});
  }


}
