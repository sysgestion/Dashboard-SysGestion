import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultasSPService {

  private _headers:HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private serUsuario: UsuarioService) { }
  
  consultaSP1076( parametros:any ) {
    let headers = this._headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    let emp = this.serUsuario.getEmpresaActualLS()['em_codigo'];
    
    params = params.append('emp', emp.toString());
    params = params.append('fecini', parametros.ini.toString());
    params = params.append('fecter', parametros.ter.toString());
    params = params.append('codven', parametros.ven.toString());
    params = params.append('codloc', parametros.loc.toString());

    return this.http.get(`https://mssql-node.herokuapp.com/sp1076`, {headers:headers, params: params})
    .pipe(map(data => {
      return data['data'];
    }));
  }

  consultaTablas(){
    let headers = this._headers.append('Content-Type', 'application/json');
    let emp = this.serUsuario.getEmpresaActualLS()['em_codigo'];
    let params = new HttpParams();

    params = params.append('emp', emp.toString());

    return this.http.get(`https://mssql-node.herokuapp.com/tablas`, {headers:headers , params: params});
  }


}
