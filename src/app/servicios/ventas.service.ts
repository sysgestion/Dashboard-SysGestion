import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private _headers:HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getClientes( activos:number ) {
    let headers = this._headers.append('Content-Type', 'application/json');
    
    let params = new HttpParams();
    
    params = params.append('fecini', activos.toString());
    
    return this.http.get(`https://dashboard-sysgestion.herokuapp.com/clientes`, {headers:headers, params: params});
    /* .pipe(map(data => {
      return data['data'];
    })); */
  }


}
