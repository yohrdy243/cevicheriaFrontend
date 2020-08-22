import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa} from './mesa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private url:string = 'http://localhost:8085/cevicheria/mesas'
  private url1:string = 'http://localhost:8080/cevicheria/mesas/cod'
  private httpHeaders = new HttpHeaders ({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(this.url);
  }

  createMesa(mesa: Mesa): Observable<Mesa>{
    return this.http.post<Mesa>(this.url,mesa,{headers: this.httpHeaders})

  }

  getMesa(id:number): Observable<Mesa>{
    return this.http.get<Mesa>(`${this.url}/${id}`)
  }

  updateMesa(mesa: Mesa): Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url}/${mesa.idMesa}`,mesa,{headers: this.httpHeaders})
  }

  deleteMesa(id: number): Observable<Mesa>{
    return this.http.delete<Mesa>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }

  getMesaCod(codMesa: string): Observable<Mesa>{
    return this.http.get<Mesa>(`${this.url1}/${codMesa}`)
  }

  updateMesaCod(mesa: Mesa): Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url1}/${mesa.codMesa}`,mesa,{headers: this.httpHeaders})
  }

  deleteMesaCod(codMesa: string): Observable<Mesa>{
    return this.http.delete<Mesa>(`${this.url1}/${codMesa}`,{headers: this.httpHeaders})
  }







}
