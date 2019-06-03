import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoriza-nv',
  templateUrl: './autoriza-nv.component.html',
  styleUrls: ['./autoriza-nv.component.css']
})
export class AutorizaNVComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rechazarNV(){
    console.log('rechazada');
  }

  aceptarNV(){
    console.log('aceptada');
  }

}
