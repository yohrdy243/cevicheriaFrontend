import { Component, OnInit } from '@angular/core';
import {Bebida} from './bebida';
import {BebidaService} from './bebida.service';
import {Router, ActivatedRoute} from '@angular/router';
import {TipoBebida} from './TipoBebida';
import swal from 'sweetalert2';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  bebidas:Bebida[];
  tipoBebidas: TipoBebida[];
  tipoOrden: number=0;
  tipoDeBebida: TipoBebida = new TipoBebida();

  cantidadPaginacion:number=8;
  p: number = 1;

  constructor(private bebidaService: BebidaService,private router:Router,
    private activatedRoute: ActivatedRoute) { }

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

  public create(): void{
    this.bebidaService.createTipoBebida(this.tipoDeBebida).subscribe(
      tipoDeBebida => {
        swal.fire(
          'Nuevo Tipo de Bebida',
          `Infracción ${tipoDeBebida.tipo} creada con éxito`,
          'success')
          this.goto("../Bebidas")
      }
    );
  }
  public goto(url){
   this.router.navigate([url]).then((e)=>{
     if(e){
       console.log("Navegación Correcta");
     }else{
       console.log("Error en la navegación");
     }
   });
 }

}
