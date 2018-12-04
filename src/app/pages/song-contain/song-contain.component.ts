import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListService } from 'src/app/services/play-list/play-list.service';
import { SongListInfo } from 'src/app/interfaces/song-list-info';
import { PlayListItem } from 'src/app/interfaces/playList';

@Component({
  selector: 'app-song-contain',
  templateUrl: './song-contain.component.html',
  styleUrls: ['./song-contain.component.less']
})
export class SongContainComponent implements OnInit {
  listInfo: SongListInfo = {
    name: '',
    trackCount: 0,
    playCount: 0,
    creator: {},
    createTime: new Date(),
    coverImgUrl: ''
  };

  playList: PlayListItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playListApi: PlayListService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const detailId = params.id;
      this.getDetail(detailId);
    });
  }
  transferDate (time) {
    const m = Math.floor(time / 60000);
    const s = Math.floor(time / 1000 - m * 60);
    if (m < 10) {
     return `0${m}:${s}`;
    }
    return `${m}:${s}`;
  }
  getDetail (id: string) {
    if (!id) {
      return;
    }
    this.playListApi.getListDetail(id).subscribe((res: any) => {
      const {name, trackCount, playCount, creator, createTime, coverImgUrl} = res.playlist;
      this.listInfo = {
        name,
        trackCount,
        playCount,
        creator,
        createTime,
        coverImgUrl
      };
      this.playList = res.playlist.tracks.map(item => {
        return {
          id: item.id,
          name: item.name,
          singer: item.ar.map(ele => ele.name).join(','),
          album: item.al.name,
          time: this.transferDate(item.dt)
        };
      });
      console.dir(res);
      console.log(this.playList);
    });
  }
}
