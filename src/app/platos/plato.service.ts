import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plato } from './plato';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private url:string = 'http://localhost:8080/cevicheria/platos'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(this.url).pipe(
      map(response=> response as Plato[])
    );
  }

  createPlato(plato: Plato): Observable<Plato>{
    return this.http.post<Plato>(this.url,plato,{headers: this.httpHeaders})

  }

  getPlato(id:number): Observable<Plato>{
    return this.http.get<Plato>(`${this.url}/${id}`)
  }

  updatePlato(plato: Plato): Observable<Plato>{
    return this.http.put<Plato>(`${this.url}/${plato.idPlato}`,plato,{headers: this.httpHeaders})
  }

  deletePlato(id: number): Observable<Plato>{
    return this.http.delete<Plato>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }

}
