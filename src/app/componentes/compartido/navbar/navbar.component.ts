import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app_nombre: string = "Dashboard Sys";
  public isLogeado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
