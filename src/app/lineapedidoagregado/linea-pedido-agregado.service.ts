import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineaPedidoAgregado } from './linea-pedido-agregado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaPedidoAgregadoService {

  private url:string = 'http://localhost:8080/cevicheria/lineaPedidoAgregados'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getLineaPedidoAgregados(): Observable<LineaPedidoAgregado[]>{
    return this.http.get<LineaPedidoAgregado[]>(this.url).pipe(
      map(response=> response as LineaPedidoAgregado[])
    );
  }

  createLineaPedidoAgregado(lineaPedidoAgregado: LineaPedidoAgregado): Observable<LineaPedidoAgregado>{
    return this.http.post<LineaPedidoAgregado>(this.url,lineaPedidoAgregado,{headers: this.httpHeaders})

  }

  getLineaPedidoAgregado(id:number): Observable<LineaPedidoAgregado>{
    return this.http.get<LineaPedidoAgregado>(`${this.url}/${id}`)
  }

  updateLineaPedidoAgregado(lineaPedidoAgregado: LineaPedidoAgregado): Observable<LineaPedidoAgregado>{
    return this.http.put<LineaPedidoAgregado>(`${this.url}/${lineaPedidoAgregado.id}`,lineaPedidoAgregado,{headers: this.httpHeaders})
  }

  deleteLineaPedidoAgregado(id: number): Observable<LineaPedidoAgregado>{
    return this.http.delete<LineaPedidoAgregado>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }
}
