import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bebida } from './bebida';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  private url:string = 'http://localhost:8080/cevicheria/bebidas'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getBebidas(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(this.url).pipe(
      map(response=> response as Bebida[])
    );
  }

  createBebida(bebida: Bebida): Observable<Bebida>{
    return this.http.post<Bebida>(this.url,bebida,{headers: this.httpHeaders})

  }

  getBebida(id:number): Observable<Bebida>{
    return this.http.get<Bebida>(`${this.url}/${id}`)
  }

  updateBebida(bebida: Bebida): Observable<Bebida>{
    return this.http.put<Bebida>(`${this.url}/${bebida.idBebida}`,bebida,{headers: this.httpHeaders})
  }

  deleteBebida(id: number): Observable<Bebida>{
    return this.http.delete<Bebida>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }

}
