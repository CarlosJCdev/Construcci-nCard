import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-soldier-tarjeta',
  templateUrl: './soldier-tarjeta.component.html',
  styleUrls: ['./soldier-tarjeta.component.css']
})
export class SoldierTarjetaComponent implements OnInit {

  @Input() soldier: any= {};
  @Input() index: number;
  @Output() verMas: EventEmitter<number>;

  constructor(private router: Router) { 
    this.verMas= new EventEmitter();
  }

  ngOnInit(): void {
  }

  verDetalle(){
   /*  console.log(this.index);
    this.router.navigate( ['/detalles', this.index]); */
    this.verMas.emit( this.index);
  }

}
