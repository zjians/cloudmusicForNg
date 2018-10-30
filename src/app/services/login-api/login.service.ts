import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) {}
  getLogin (
    {
      phone,
      password,
    }
  ) {
    const url = 'http://127.0.0.1:3000/login/cellphone';
    return this.http
      .get(
        url,
        {
          observe: 'response',
          params: {
            phone,
            password
          },
        }
      );
  }
}
