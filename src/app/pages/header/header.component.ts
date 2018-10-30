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
    console.log(12313132);
    console.log(value);
    this.loginApi.getLogin({
      phone: value.userName,
      password: value.password
    }).subscribe((res) => {
      console.log(res);
    });
  }

}
