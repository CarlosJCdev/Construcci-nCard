import { Component, OnInit } from '@angular/core';
import { SoldierService, soldier} from '../../servicios/soldiers.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrls: ['./soldiers.component.css']
})
export class SoldiersComponent implements OnInit {
  soldiers: soldier[]= [];

  constructor( private _soldierService: SoldierService, private router: Router) { }

  ngOnInit(): void {

    this.soldiers= this._soldierService.getSoldiers();
    /* console.log(this.soldiers); */
  }
 
  verDetalle(id: number){
    this.router.navigate( ['/detalles', id]);
  }

}
