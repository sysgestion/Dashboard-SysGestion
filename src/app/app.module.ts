import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

/* ngx-bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { APP_RUTAS } from './app.rutas';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import { SidebarComponent } from './componentes/compartido/sidebar/sidebar.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { Sp1076Component } from './componentes/sp1076/sp1076.component';
import { GetMesPipe } from './pipes/get-mes.pipe';
import { MonedaChilenaPipe } from './pipes/moneda-chilena.pipe';
import { AutorizaNVComponent } from './componentes/autoriza-nv/autoriza-nv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    Sp1076Component,
    GetMesPipe,
    MonedaChilenaPipe,
    AutorizaNVComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    APP_RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
