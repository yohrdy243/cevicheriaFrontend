import { Component, OnInit } from '@angular/core';
import{ Mesa } from './mesa'
import { MesaService } from './mesa.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  mesas:Mesa[];
  mesa: Mesa = new Mesa;

  constructor(private mesaService: MesaService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarMesas();
  }

  listarMesas():void{
    this.mesaService.getMesas().subscribe( mesas=>{this.mesas=mesas});
  }

}
