import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Endereço da API no sheet.best
  private readonly API_URL =
    'https://sheet.best/api/sheets/e9576c8b-3dac-46d6-8053-67a4772ad446';

  constructor(private http: HttpClient) {}

  /**
   * Retorna uma lista com todos os usuários cadastrados na planilha do Google
   * @returns Lista com todos os usuários cadastrados
   */
  public readAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
}
