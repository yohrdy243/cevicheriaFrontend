import { Component, OnInit } from '@angular/core';
import {Bebida} from './bebida';
import {BebidaService} from './bebida.service';
import {Router, ActivatedRoute} from '@angular/router';
import {TipoBebida} from './TipoBebida';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  bebidas:Bebida[];
  tipoBebidas: TipoBebida[];
  tipoOrden: number=0;

  constructor(private bebidaService: BebidaService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarBebidas();
    this.listarTipoBebida();
  }

  listarBebidas():void{
    this.bebidaService.getBebidas().subscribe(
      bebidas =>{this.bebidas = bebidas});
  }

  listarTipoBebida():void{
    this.bebidaService.getTipoBebida().subscribe(
      tipoBebida => {this.tipoBebidas = tipoBebida});
  }

  listarPorTipoDeBebida(val:any):void{
    this.bebidaService.getBebidaPorTipo(val).subscribe(
      bebidas => {this.bebidas = bebidas}
    );
  }
  cambiarTipoOrden(val:any){
    this.tipoOrden=val;
    if(this.tipoOrden !=0)
      this.listarPorTipoDeBebida(val);
    else
      this.listarBebidas();
  }

}
