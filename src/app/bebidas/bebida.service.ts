import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bebida } from './bebida';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {TipoBebida} from './TipoBebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  private url:string = 'http://localhost:8085/cevicheria/bebidas'
  private urlTipo:string = 'http://localhost:8085/cevicheria/tipoBebida'
  private urlPorTipo:string='http://localhost:8085/cevicheria/bebidas/tipo'
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getBebidas(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(this.url).pipe(
      map(response=> response as Bebida[])
    );
  }
  getTipoBebida():Observable<TipoBebida[]>{
    return this.http.get<TipoBebida[]>(this.urlTipo).pipe(
      map(response=>response as TipoBebida[])
    );
  }

  getBebidaPorTipo(id:number): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(`${this.urlPorTipo}/${id}`).pipe(
      map(response => response as Bebida[])
    );
  }

  createBebida(bebida: Bebida): Observable<Bebida>{
    return this.http.post<Bebida>(this.url,bebida,{headers:this.httpHeaders});
  }

  createTipoBebida(tipoBebida: TipoBebida): Observable<TipoBebida>{
    return this.http.post<TipoBebida>(this.urlTipo,tipoBebida,{headers:this.httpHeaders});
  }

  getBebida(id:number): Observable<Bebida>{
    return this.http.get<Bebida>(`${this.url}/${id}`)
  }

  getTipoDeBebida(id): Observable<TipoBebida>{
    return this.http.get<TipoBebida>(`${this.urlTipo}/${id}`)
  }

  updateBebida(bebida: Bebida): Observable<Bebida>{
    return this.http.put<Bebida>(`${this.url}/${bebida.idBebida}`,bebida,{headers: this.httpHeaders})
  }

  deleteBebida(id: number): Observable<Bebida>{
    return this.http.delete<Bebida>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }

}
