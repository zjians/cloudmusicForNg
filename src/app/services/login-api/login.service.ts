import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDef } from 'src/app/interfaces/user-def';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logined = false;
  isLoginSubject = new Subject();
  logined$ = this.isLoginSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
  ) {
    setTimeout(() => {
      this.logined = true;
      this.isLoginSubject.next(this.logined);
    }, 5000);
  }

  handleLogin () {
    // const url = environment.baseUrl +
    // this.httpClient.get <UserDef>(
    //   url,
    //   {
    //     params
    //   }
    // ) {

    // };
  }
  // getLogin (
  //   {
  //     phone,
  //     password,
  //   }
  // ) {
  //   const url = 'http://127.0.0.1:3000/login/cellphone';
  //   return this.http
  //     .get(
  //       url,
  //       {
  //         observe: 'response',
  //         params: {
  //           phone,
  //           password
  //         },
  //       }
  //     );
  // }
}
