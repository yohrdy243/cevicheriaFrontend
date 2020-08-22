import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineaPedidoPlato } from './linea-pedido-plato';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaLineaPedidoPlatoPlatoService {

    private url:string = 'http://localhost:8080/cevicheria/lineaPedidoPlatos'
    private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

    constructor(private http: HttpClient) { }

    getLineaPedidoPlatos(): Observable<LineaPedidoPlato[]>{
      return this.http.get<LineaPedidoPlato[]>(this.url).pipe(
        map(response=> response as LineaPedidoPlato[])
      );
    }

    createLineaPedidoPlato(lineaPedidoPlato: LineaPedidoPlato): Observable<LineaPedidoPlato>{
      return this.http.post<LineaPedidoPlato>(this.url,lineaPedidoPlato,{headers: this.httpHeaders})

    }

    getLineaPedidoPlato(id:number): Observable<LineaPedidoPlato>{
      return this.http.get<LineaPedidoPlato>(`${this.url}/${id}`)
    }

    updateLineaPedidoPlato(lineaPedidoPlato: LineaPedidoPlato): Observable<LineaPedidoPlato>{
      return this.http.put<LineaPedidoPlato>(`${this.url}/${lineaPedidoPlato.id}`,lineaPedidoPlato,{headers: this.httpHeaders})
    }

    deleteLineaPedidoPlato(id: number): Observable<LineaPedidoPlato>{
      return this.http.delete<LineaPedidoPlato>(`${this.url}/${id}`,{headers: this.httpHeaders})
    }
}
