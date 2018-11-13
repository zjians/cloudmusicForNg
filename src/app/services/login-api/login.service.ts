import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDef } from 'src/app/interfaces/user-def';
import { UserInfo } from 'src/app/interfaces/user-info';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logined = false;
  isLoginSubject = new Subject();
  logined$ = this.isLoginSubject.asObservable();
  userInfo: UserInfo;

  constructor(
    private httpClient: HttpClient,
  ) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      this.userInfo = userInfo;
      this.logined = true;
    }
    this.isLoginSubject.next(this.logined);
  }

  handleLogin (phone: string, password: string) {
    const url = `${environment.baseUrl}/login/cellphone?phone=${phone}&password=${password}`;
    this.httpClient.get(url).subscribe((res: any) => {
      if (res.code === 200 && res.loginType === 1) {
        this.userInfo = res.profile;
        this.logined = true;
      } else {
        this.userInfo = null;
        this.logined = false;
      }
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      this.isLoginSubject.next(this.logined);
    });
  }

  handleLoginOut () {
    const url = `${environment.baseUrl}/logout`;
    this.httpClient.post(url, {}).subscribe((res: any) => {
      if (res.code === 200) {
        this.userInfo = <any>{};
        this.logined = false;
        this.isLoginSubject.next(this.logined);
        localStorage.setItem('userInfo', null);
      }
    });
  }
}
