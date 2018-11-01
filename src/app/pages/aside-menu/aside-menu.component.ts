import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.less']
})
export class AsideMenuComponent implements OnInit {

  menuList: any[];

  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        icon: '',
        title: '',
        url: ''
      }
    ];
  }

}
