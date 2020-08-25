import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {SoldierService} from './servicios/soldiers.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SoldiersComponent } from './components/soldiers/soldiers.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import {FormsModule} from '@angular/forms';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SoldierTarjetaComponent } from './components/soldier-tarjeta/soldier-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SoldiersComponent,
    DetallesComponent,
    BusquedaComponent,
    SoldierTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SoldierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
