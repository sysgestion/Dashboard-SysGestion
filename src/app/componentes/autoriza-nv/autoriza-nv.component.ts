import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/servicios/ventas.service';
import { ConsultasSPService } from 'src/app/servicios/consultasSP.service';

@Component({
  selector: 'app-autoriza-nv',
  templateUrl: './autoriza-nv.component.html',
  styleUrls: ['./autoriza-nv.component.css']
})
export class AutorizaNVComponent implements OnInit {

  public loading:boolean;
  public buscando:boolean;
  public vendedores = [{ve_codven:0, ve_nomven:'Todos'}];
  public locales = [{lc_codloc:0, lc_nomloc:'Todos'}];
  public clientes = [];
  public dataSpNotaVenta = [];

  constructor(private serVentas: VentasService, private serConsulta: ConsultasSPService) { 
    //this.loading = true;

    /* Carga tablas vendedores y locales */
    //this.serConsulta.consultaTablas().subscribe(data => {
      /* Recorro el arreglo de vendedores que viene de data y por cada elemento lo agrego al array de la vista */
      /* data['vendedores'].map(elem => this.vendedores.push(elem));
      data['locales'].map(elem => this.locales.push(elem));
      this.loading = false; */

      /* this,serVentas.getClientes(1).subscribe(data => {
        data['data'].map(elem => this.clientes.push(elem));
        console.log(this.clientes);
        this.loading = false;
      }); */
    //});
  
  }
  
  ngOnInit() {}

  buscarNotaVenta(folio){
    this.buscando = true;
    
    this.serVentas.getNotaVenta(folio).subscribe(data => {
      console.log(data);
      
      data['data'].map(elem => this.dataSpNotaVenta.push(elem));
      console.log(this.dataSpNotaVenta);
      this.buscando = false;
      
    });
  }

}
