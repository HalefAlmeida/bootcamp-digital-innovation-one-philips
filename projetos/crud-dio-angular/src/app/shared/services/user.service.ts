import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Endereço da API no sheet.best
  private readonly API_URL =
    'https://sheet.best/api/sheets/e9576c8b-3dac-46d6-8053-67a4772ad446';

  //Enviando um header na requisição
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Token: 'teste-de-teste',
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Retorna uma lista com todos os usuários cadastrados na planilha do Google
   * @returns Lista com todos os usuários cadastrados
   */
  public readAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL).pipe(take(1));
  }

  /**
   * Cria um novo registro na planilha da API
   */
  public create(record: User): Observable<User> {
    return this.http.post<User>(this.API_URL, record);
  }

  /**
   * Deleta um registro da base de dados
   * @param id ID do registro a ser deletado
   * @returns Observable com o usuário deletado
   */
  public delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.API_URL}/id/${id}`);
  }

  public update(id: number, record: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/id/${id}`, record);
  }

  public readById(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/id/${id}`);
  }
}
