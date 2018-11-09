import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login-api/login.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-registe',
  templateUrl: './registe.component.html',
  styleUrls: ['./registe.component.less']
})
export class RegisteComponent implements OnInit {
  @Input()
  isVisible;

  @Output()
  public hidePopover = new EventEmitter<boolean>();

  isLogined: boolean;

  validateForm: FormGroup;

  constructor(
    private loginApi: LoginService,
    private fb: FormBuilder
  ) { }

  checkPhone(control: FormControl): { [ s: string ]: boolean } {
    const regExp = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ig);
    if (!control.value) {
      return { required: true };
    } else if (!regExp.test(control.value)) {
      return {notPhone: true};
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ this.checkPhone ] ],
      password: [ null, [ Validators.required ] ],
    });
    this.isLogined = this.loginApi.logined;
    this.loginApi.logined$.subscribe((isLogined: boolean) => {
      this.isLogined = isLogined;
    });
  }

  submitForm($event) {
    $event.preventDefault();
    const { userName , password} = this.validateForm.value;
    this.loginApi.handleLogin(userName, password);
  }

  handleCancel() {
    this.hidePopover.emit(false);
  }
}
