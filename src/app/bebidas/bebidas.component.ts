import { Component, OnInit } from '@angular/core';
import {Bebida} from './bebida';
import {BebidaService} from './bebida.service';
import {Router, ActivatedRoute} from '@angular/router';
import {TipoBebida} from './TipoBebida';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  bebida: Bebida = new Bebida();

  cantidadPaginacionBebida:number=5;
  paginaBebida:number=1;

  tipo:TipoBebida = new TipoBebida();

  constructor(private bebidaService: BebidaService,private router:Router,
    private activatedRoute: ActivatedRoute,private modalService:NgbModal) { }

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

  obtenerTipoDeBebida(tipo): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = tipo
      console.log(id)
      if(id){
        this.bebidaService.getTipoDeBebida(id).subscribe(
          (tipoDeBebida) =>  this.tipoDeBebida = tipoDeBebida
        )
        }
    })
  }

  asginarTipoDeBebida(): TipoBebida{
    this.activatedRoute.params.subscribe(params =>{
      let id = this.tipo
      console.log(id)
      if(id){
        this.bebidaService.getTipoDeBebida(2).subscribe(
          (tipoDeBebida) =>  this.tipoDeBebida = tipoDeBebida
        )
        }
    })
    console.log(this.tipoDeBebida.tipo)
    return this.tipoDeBebida;
  }

  cambiarTipoOrden(val:any){
    this.tipoOrden=val;
    if(this.tipoOrden !=0)
      this.listarPorTipoDeBebida(val);
    else
      this.listarBebidas();
  }

  almacenarTipo(val:any){
    this.tipo=val;
    console.log(this.tipo.tipo)
  }

  public create(modal): void{
    this.cerrarModal(modal);
    this.bebidaService.createTipoBebida(this.tipoDeBebida).subscribe(
      tipoDeBebida => {
        swal.fire(
          'Nuevo Tipo de Bebida',
          `${tipoDeBebida.tipo} creada con éxito`,
          'success')
          this.goto("../Bebidas")
      }
    );
  }

  public createBebida(modal): void{
    this.cerrarModal(modal);
    this.bebida.tipo = this.tipo;
    console.log(this.tipo.tipo + " "+ this.bebida.nombre)
    this.bebidaService.createBebida(this.bebida).subscribe(
      bebida =>{
        swal.fire(
          'Nueva Bebida',
          `${bebida.nombre} creada con éxito`,
          'success')
          this.goto("/Bebidas")
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

 abrirModal(modal){
   this.modalService.open(modal);
 }
 abrirModalTipo(modal,tipo){
   this.obtenerTipoDeBebida(tipo);
   this.modalService.open(modal);
 }
 cerrarModal(modal){
 this.modalService.dismissAll(modal);
 }

}
