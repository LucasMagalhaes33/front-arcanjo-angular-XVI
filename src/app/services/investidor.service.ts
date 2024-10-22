import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvestidorService {

  private apiUrl = 'http://localhost:8080/investidores'; // URL do back-end

  constructor(private http: HttpClient) { }

  getRecomendacaoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/recomendacao/${id}`);
  }

}
