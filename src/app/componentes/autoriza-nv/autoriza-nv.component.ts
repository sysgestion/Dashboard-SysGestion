import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-autoriza-nv',
  templateUrl: './autoriza-nv.component.html',
  styleUrls: ['./autoriza-nv.component.css']
})
export class AutorizaNVComponent implements OnInit {

  loading:boolean;
  clientes = [];

  constructor(private serVentas: VentasService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.serVentas.getClientes(1).subscribe(data => {
      console.log(data);
      this.clientes = data;

      this.loading = false;
    });
  }

  rechazarNV(){
    console.log('rechazada');
  }

  aceptarNV(){
    console.log('aceptada');
  }

}
