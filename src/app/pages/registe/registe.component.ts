import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login-api/login.service';
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

  constructor(
    private loginApi: LoginService
  ) { }

  ngOnInit() {
    this.loginApi.logined$.subscribe((isLogined: boolean) => {
      this.isLogined = isLogined;
    });
  }

  handleCancel() {
    console.log('cancel');
    this.hidePopover.emit(false);
  }
}
