import { Component, OnInit } from '@angular/core';
import { CreateAsideMenuItem } from 'src/app/interfaces/aside-menu-item';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.less']
})
export class AsideMenuComponent implements OnInit {

  menuList: CreateAsideMenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        name: '推荐',
        list: [
          {
            icon: '',
            title: '发现音乐',
            url: 'findMusic'
          },
          {
            icon: '',
            title: '私人FM',
            url: 'privateFm'
          },
          {
            icon: '',
            title: 'FM',
            url: 'publicFm'
          },
          {
            icon: '',
            title: '朋友',
            url: 'frend'
          }
        ],
      },
      {
        name: '我的音乐',
        list: [
          {
            icon: '',
            title: 'item2',
            url: 'http://'
          }
        ]
      }];
  }

}
