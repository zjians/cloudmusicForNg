import { Component, OnInit } from '@angular/core';
import { CreateAsideMenuItem } from 'src/app/interfaces/aside-menu-item';
import { PlayListService } from 'src/app/services/play-list/play-list.service';
import { LoginService } from 'src/app/services/login-api/login.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.less']
})
export class AsideMenuComponent implements OnInit {

  menuList: CreateAsideMenuItem[];
  orderList: any[];
  creatList: any[];
  baseMenuList = [
    {
      name: '推荐',
      list: [
        {
          icon: 'wangyi-icon-yinyue',
          title: '发现音乐',
          url: 'findMusic'
        },
        {
          icon: 'wangyi-icon-guangbodiantai',
          title: '私人FM',
          url: 'privateFm'
        },
        {
          icon: 'wangyi-icon-mv1',
          title: 'FM',
          url: 'publicFm'
        },
        {
          icon: 'wangyi-icon-pengyou',
          title: '朋友',
          url: 'frend'
        }
      ],
    },
    {
      name: '我的音乐',
      icon: 'anticon anticon-right',
      list: [
        {
          icon: '',
          title: 'item2',
          url: 'http://'
        }
      ]
    }];

  constructor(
    private playListApi: PlayListService,
    private loginApi: LoginService
  ) { }

  ngOnInit() {
    this.menuList = JSON.parse(JSON.stringify(this.baseMenuList));
    this.setMenuList();
    this.loginApi.isLoginSubject.subscribe(logined => {
      this.setMenuList();
    });
  }

  setMenuList () {
    console.log(this.loginApi.logined);
    if (this.loginApi.logined) {
      this.getMenuList();
    } else {
      this.menuList = JSON.parse(JSON.stringify(this.baseMenuList));
    }
  }

  getMenuList () {
    this.playListApi.getUserList().subscribe((res: any) => {
      const orderList = [];
      const creatList = [];
      res.playlist.map(item => {
        if (item.ordered) {
          orderList.push({
            icon: 'wangyi-icon-liebiao',
            title: item.name,
            url: `songListDetails`,
            id: item.id
          });
        } else {
          creatList.push({
            icon: 'wangyi-icon-liebiao',
            title: item.name,
            url: `songListDetails`,
            id: item.id
          });
        }
      });
      this.orderList = orderList;
      this.creatList = creatList;
      if (creatList.length) {
        this.menuList.push({
          name: '创建的歌单',
          list: this.creatList
        });
      }
      if (orderList.length) {
        this.menuList.push({
          name: '收藏的歌单',
          list: this.orderList
        });
      }
      console.dir(this.orderList);
      console.dir(this.creatList);
    });
  }

}
