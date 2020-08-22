import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineaPedidoBebida } from './linea-pedido-bebida';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaPedidoBebidaService {

  private url:string = 'http://localhost:8080/cevicheria/lineaPedidoBebidas'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getLineaPedidoBebidas(): Observable<LineaPedidoBebida[]>{
    return this.http.get<LineaPedidoBebida[]>(this.url).pipe(
      map(response=> response as LineaPedidoBebida[])
    );
  }

  createLineaPedidoBebida(lineaPedidoBebida: LineaPedidoBebida): Observable<LineaPedidoBebida>{
    return this.http.post<LineaPedidoBebida>(this.url,lineaPedidoBebida,{headers: this.httpHeaders})

  }

  getLineaPedidoBebida(id:number): Observable<LineaPedidoBebida>{
    return this.http.get<LineaPedidoBebida>(`${this.url}/${id}`)
  }

  updateLineaPedidoBebida(lineaPedidoBebida: LineaPedidoBebida): Observable<LineaPedidoBebida>{
    return this.http.put<LineaPedidoBebida>(`${this.url}/${lineaPedidoBebida.id}`,lineaPedidoBebida,{headers: this.httpHeaders})
  }

  deleteLineaPedidoBebida(id: number): Observable<LineaPedidoBebida>{
    return this.http.delete<LineaPedidoBebida>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }
}
