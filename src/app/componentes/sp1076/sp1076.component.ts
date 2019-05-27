import { Component, OnInit } from '@angular/core';
import { ConsultasSPService } from '../../servicios/consultasSP.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-sp1076',
  templateUrl: './sp1076.component.html',
  styleUrls: ['./sp1076.component.css']
})
export class Sp1076Component implements OnInit {
  
  vendedores = [{ve_codven:0, ve_nomven:'Todos'}];
  locales = [{lc_codloc:0, lc_nomloc:'Todos'}];
  dataSP = [];
  montoCre = [];
  montoVta = [];
  meses = [];

  constructor(private serConsulta: ConsultasSPService) { }

  ngOnInit() {
    /* carga tablas vendedores y locales */
    this.serConsulta.consultaTablas().subscribe(data => {
      
      /* recorro el arreglo de vendedores que viene de data y por cada elemento lo agrego al array de la vista */
      data['vendedores'].map(elem => this.vendedores.push(elem));
      data['locales'].map(elem => this.locales.push(elem));

      console.log(this.vendedores);
      console.log(this.locales);
      
    });
  }

  /* reset(){

    this.dataSP = [];
    this.montoCre = [];
    this.montoVta = [];
    this.meses = [];

  } */

  cargarGrafico(){

    let inicio = $( "#inicio" ).val();
    let termino = $( "#termino" ).val();
    let vendedor = $( "#vendedor" ).val();
    let local = $("#local").val();
    

    this.serConsulta.consultaSP1076(inicio, termino, vendedor, local).subscribe(data => {

      /* lleno data con lo que me devuelve el SP */
      this.dataSP = data;

      console.log(this.dataSP);

      this.dataSP.map(elem => {

        let periodo = '';

        switch (elem.TM_MESPER) {
          case 1:
            periodo = 'Enero '+elem.TM_ANOPER;
            break;
          case 2:
            periodo = 'Febrero '+elem.TM_ANOPER;
            break;
          case 3:
            periodo = 'Marzo '+elem.TM_ANOPER;
            break;
          case 4:
            periodo = 'Abril '+elem.TM_ANOPER;
            break;
          case 5:
            periodo = 'Mayo '+elem.TM_ANOPER;
            break;
          case 6:
            periodo = 'Junio '+elem.TM_ANOPER;
            break;
          case 7:
            periodo = 'Julio '+elem.TM_ANOPER;
            break;
          case 8:
            periodo = 'Agosto '+elem.TM_ANOPER;
            break;
          case 9:
            periodo = 'Septiembre '+elem.TM_ANOPER;
            break;
          case 10:
            periodo = 'Octubre '+elem.TM_ANOPER;
            break;
          case 11:
            periodo = 'Noviembre '+elem.TM_ANOPER;
            break;
          case 12:
            periodo = 'Diciembre '+elem.TM_ANOPER;
            break;
        }

        this.meses.push(periodo);
        //this.anios.push(elem.TM_ANOPER);
        this.montoCre.push(elem.TM_MTOCRE);
        this.montoVta.push(elem.TM_MTOVTA);
      });

      /* le pone el ano a cada mes del arreglo meses */
      /* for(let i = 0; i < this.dataSP.length; i++){
        this.meses[i] = this.meses[i] + " " + this.dataSP[i].TM_ANOPER;
      } */

    });
  }

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

  
  public barChartLabels: Label[] = this.meses;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { borderWidth: 2, data: this.montoCre, label: 'Monto Cre' },
    { borderWidth: 2, data: this.montoVta, label: 'Monto Vta' }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
