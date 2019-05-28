import { Component } from '@angular/core';

declare let jQuery:any;
declare let $:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cliente-dashboard-sys';
  public app_nombre: string = "SysGestion";
  isLogeado:boolean = false;

  constructor() { 
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
    });
  }

}
