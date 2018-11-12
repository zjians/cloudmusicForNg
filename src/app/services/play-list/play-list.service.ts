import { Injectable } from '@angular/core';
import { LoginService } from '../login-api/login.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  constructor(
    private httpClient: HttpClient,
    private userApi: LoginService
  ) { }

  getUserList () {
    const userId = this.userApi.userInfo.userId;
    const url = `${environment.baseUrl}/user/playlist?uid=${userId}`;
    return this.httpClient.get(url);
  }
  getListDetail (id: string) {
    const url = `${environment.baseUrl}/playlist/detail?id=${id}`;
    return this.httpClient.get(url);
  }
}
