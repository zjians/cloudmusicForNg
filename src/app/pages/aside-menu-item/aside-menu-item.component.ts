import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-menu-item',
  templateUrl: './aside-menu-item.component.html',
  styleUrls: ['./aside-menu-item.component.less']
})
export class AsideMenuItemComponent implements OnInit {
  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
