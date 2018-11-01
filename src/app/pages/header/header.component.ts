import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginService } from '../../services/login-api/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isVisible = false;
  validateForm: FormGroup;
  showLoginForm = false;

  constructor(
    private fb: FormBuilder,
    private loginApi: LoginService
  ) { }

  ngOnInit() {
    console.log('test');
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, this.testValidator] ],
      password: [ null, [ Validators.required ] ]
    });
  }
  handleLogin () {
    console.log('login');
    this.isVisible = !this.isVisible;
  }
  handleCancel () {
    this.isVisible = false;
  }

  handleOk() {
    // this.isVisible = false;
  }
  handleToggleLogin () {
    this.showLoginForm = true;
  }
  testValidator(control: FormControl) {
    if (control.value && control.value === '123') {
      console.log(control);
      return { error: true, duplicated: true };
    }
  }

  submitForm (event, value) {
    console.log(value);
    this.loginApi.getLogin({
      phone: value.userName,
      password: value.password
    }).subscribe((res) => {
      console.log(res);
    });
  }

  handleMax () {
    const docElm: any = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) { // fireFox
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) { // Chrome等
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) { // IE11
      docElm.msRequestFullscreen();
    }
  }

  handleMin () {
    const document: any = window.document;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  handleLoginOut () {
    console.log('退出登陆');
  }

}
