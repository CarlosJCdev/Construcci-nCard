import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SoldierService} from '../../servicios/soldiers.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  soldier: any= {};

  constructor(private activatedRouter: ActivatedRoute, private _soldierService: SoldierService) {

    this.activatedRouter.params.subscribe( parametros =>{
      this.soldier= this._soldierService.getSoldier( parametros ['id']);
      console.log(this.soldier);
    });
   }

  ngOnInit(): void {
  }

}
