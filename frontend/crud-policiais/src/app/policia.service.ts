import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciaService {

  private apiUrl = 'http://localhost:3000/policiais';
  constructor(private http: HttpClient) { }

 /**
   * Envia os dados de um novo policial para a API.
   * @param dados Objeto contendo os dados do policial.
   * @returns Um Observable com a resposta da requisição.
   */
  cadastrarPolicial(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  /**
   * Busca a lista de policiais da API.
   * @param params (Opcional) Parâmetros de filtro para CPF ou RG.
   * @returns Um Observable com a lista de policiais.
   */
  listarPoliciais(params?: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params });
  }

}