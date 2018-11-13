import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListService } from 'src/app/services/play-list/play-list.service';
import { SongListInfo } from 'src/app/interfaces/song-list-info';

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
  getDetail (id: string) {
    if (!id) {
      return;
    }
    this.playListApi.getListDetail(id).subscribe((res: any) => {
      // console.dir(res);
      const {name, trackCount, playCount, creator, createTime, coverImgUrl} = res.playlist;
      this.listInfo = {
        name,
        trackCount,
        playCount,
        creator,
        createTime,
        coverImgUrl
      };
      console.dir(res);
    });
  }
}
