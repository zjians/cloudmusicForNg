import { Component, OnInit, Input } from '@angular/core';
import { CreateAsideMenuItem } from 'src/app/interfaces/aside-menu-item';

@Component({
  selector: 'app-aside-menu-item',
  templateUrl: './aside-menu-item.component.html',
  styleUrls: ['./aside-menu-item.component.less']
})
export class AsideMenuItemComponent implements OnInit {
  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}
