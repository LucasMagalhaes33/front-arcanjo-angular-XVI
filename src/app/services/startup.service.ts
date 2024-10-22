import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private apiUrl = 'http://localhost:8080/startups'; // URL do back-end

  constructor(private http: HttpClient) { }

  // Método para buscar todas as startups
  getStartups(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getStartupById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getRecomendacaoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/investidores/recomendacao/${id}`);
  }

}
