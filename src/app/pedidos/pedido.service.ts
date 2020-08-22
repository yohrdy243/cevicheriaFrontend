import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pedido } from './pedido';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

    private url:string = 'http://localhost:8080/cevicheria/pedidos'
    private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

    constructor(private http: HttpClient) { }

    getPedidos(): Observable<Pedido[]>{
      return this.http.get<Pedido[]>(this.url).pipe(
        map(response=> response as Pedido[])
      );
    }

    createPedido(pedido: Pedido): Observable<Pedido>{
      return this.http.post<Pedido>(this.url,pedido,{headers: this.httpHeaders})

    }

    getPedido(id:number): Observable<Pedido>{
      return this.http.get<Pedido>(`${this.url}/${id}`)
    }

    updatePedido(pedido: Pedido): Observable<Pedido>{
      return this.http.put<Pedido>(`${this.url}/${pedido.idPedido}`,pedido,{headers: this.httpHeaders})
    }

    deletePedido(id: number): Observable<Pedido>{
      return this.http.delete<Pedido>(`${this.url}/${id}`,{headers: this.httpHeaders})
    }
}
