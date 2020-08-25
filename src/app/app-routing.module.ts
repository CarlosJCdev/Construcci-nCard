import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SoldiersComponent } from './components/soldiers/soldiers.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'soldiers', component: SoldiersComponent},
  { path: 'detalles/:id', component: DetallesComponent},
  { path: 'busqueda/:busqueda', component: BusquedaComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
