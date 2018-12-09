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

  getUserList () { // 获取用户歌单
    const userId = this.userApi.userInfo.userId;
    const url = `${environment.baseUrl}/user/playlist?uid=${userId}`;
    return this.httpClient.get(url);
  }

  getListDetail (id: string) { // 获取歌单详情
    const url = `${environment.baseUrl}/playlist/detail?id=${id}`;
    return this.httpClient.get(url);
  }

  getSongUrl (id: number): any { // 获取指定歌曲播放url
    const url = `${environment.baseUrl}/song/url?id=${id}`;
    return this.httpClient.get(url);
  }
}
