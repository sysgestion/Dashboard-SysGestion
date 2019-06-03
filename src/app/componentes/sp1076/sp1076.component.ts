import { Component, OnInit } from '@angular/core';
import { ConsultasSPService } from '../../servicios/consultasSP.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-sp1076',
  templateUrl: './sp1076.component.html',
  styleUrls: ['./sp1076.component.css']
})
export class Sp1076Component implements OnInit {

  public tamano:number = 15;
  public vendedores = [{ve_codven:0, ve_nomven:'Todos'}];
  public locales = [{lc_codloc:0, lc_nomloc:'Todos'}];
  public dataSP = [];
  public datosPorComparar = {};
  public cargandoDatos:boolean = false;

  /* Parametros de busqueda */
  public inicio:string;
  public termino:string;
  public vendedor:number;
  public local:number;

  /* Propiedades del grafico */
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'horizontalBar';  /* bar */
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { borderWidth: 2, data: [], label: 'Monto Credito' },
    { borderWidth: 2, data: [], label: 'Monto Venta' }
  ];
  /* backgroundColor: 'rgba(253, 203, 110,1.0)' */

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  constructor(private serConsulta: ConsultasSPService) { }

  ngOnInit() {
    /* Carga tablas vendedores y locales */
    this.serConsulta.consultaTablas().subscribe(data => {
      /* Recorro el arreglo de vendedores que viene de data y por cada elemento lo agrego al array de la vista */
      data['vendedores'].map(elem => this.vendedores.push(elem));
      data['locales'].map(elem => this.locales.push(elem)); 
    });
  }

  cargarGrafico(){

    /* Inhabilito el boton de busqueda mientras se realiza la consulta*/
    this.cargandoDatos = true;
    
    /* Jquery, debo cambiar esto para obtener los datos */
    this.inicio = $( "#inicio" ).val();
    this.termino = $( "#termino" ).val();
    this.vendedor = $( "#vendedor" ).val();
    this.local = $("#local").val();

    let parametros = {
      ini: this.inicio,
      ter: this.termino,
      ven: this.vendedor,
      loc: this.local
    }
    
    this.serConsulta.consultaSP1076(parametros).subscribe(data => {

      /* Cuando ya se carga la data el boton se activa */
      this.cargandoDatos = false;
      
      /* Lleno dataSP con lo que me devuelve el SP */
      this.dataSP = data;

      /* Da vuelta el arreglo */
      this.dataSP.reverse();

      /* Elimina el ultimo elemento y lo retorna guardandolo en datosPorComparar*/
      this.datosPorComparar = this.dataSP.pop();
      
      /* Volvemos a dar vuelta el arreglo dejandolo en el orden que tenia */
      this.dataSP.reverse();

      /* Creo 3 arreglos para el grafico */
      let montoCredito =  [];
      let montoVenta = [];
      let meses = [];

      /* Recorro la data llenando los 3 arreglos */
      this.dataSP.map(elem => {

        let periodo = '';

        switch (elem.TM_MESPER) {
          case 1: periodo = 'Enero '+elem.TM_ANOPER; break;
          case 2: periodo = 'Febrero '+elem.TM_ANOPER; break;
          case 3: periodo = 'Marzo '+elem.TM_ANOPER; break;
          case 4: periodo = 'Abril '+elem.TM_ANOPER; break;
          case 5: periodo = 'Mayo '+elem.TM_ANOPER; break;
          case 6: periodo = 'Junio '+elem.TM_ANOPER; break;
          case 7: periodo = 'Julio '+elem.TM_ANOPER; break;
          case 8: periodo = 'Agosto '+elem.TM_ANOPER; break;
          case 9: periodo = 'Septiembre '+elem.TM_ANOPER; break;
          case 10: periodo = 'Octubre '+elem.TM_ANOPER; break;
          case 11: periodo = 'Noviembre '+elem.TM_ANOPER; break;
          case 12: periodo = 'Diciembre '+elem.TM_ANOPER; break;
        }

        

        meses.push(periodo);
        montoCredito.push(elem.TM_MTOCRE);
        montoVenta.push(elem.TM_MTOVTA);
        
      });
      
      this.barChartLabels = meses;
      this.barChartData[0].data = montoCredito;
      this.barChartData[1].data = montoVenta;
      
    });

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
