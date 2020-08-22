import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agregado } from './agregado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgregadoService {

  private url:string = 'http://localhost:8080/cevicheria/agregados'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getAgregados(): Observable<Agregado[]>{
    return this.http.get<Agregado[]>(this.url).pipe(
      map(response=> response as Agregado[])
    );
  }

  createAgregado(agregado: Agregado): Observable<Agregado>{
    return this.http.post<Agregado>(this.url,agregado,{headers: this.httpHeaders})

  }

  getAgregado(id:number): Observable<Agregado>{
    return this.http.get<Agregado>(`${this.url}/${id}`)
  }

  updateAgregado(agregado: Agregado): Observable<Agregado>{
    return this.http.put<Agregado>(`${this.url}/${agregado.idAgregado}`,agregado,{headers: this.httpHeaders})
  }

  deleteAgregado(id: number): Observable<Agregado>{
    return this.http.delete<Agregado>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }

}
