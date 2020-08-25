import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SoldierService, soldier} from '../../servicios/soldiers.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  soldiers: soldier[]=[]
  busqueda: string;

  constructor(private activatedRoute: ActivatedRoute, private soldierService: SoldierService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.busqueda= params['busqueda'];
      this.soldiers= this.soldierService.buscarSoldier( params['busqueda']);
      console.log(this.soldiers);
    });
  }
  //Ya no necesito este método, ya que con @Input, me trae esa funcionalidad desde el soldier-tarjeta 
 /*  verDetalle(id: number){
    this.router.navigate( ['/detalles', id]);
  } */
}
