import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListService } from 'src/app/services/play-list/play-list.service';

@Component({
  selector: 'app-song-contain',
  templateUrl: './song-contain.component.html',
  styleUrls: ['./song-contain.component.less']
})
export class SongContainComponent implements OnInit {

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
    this.playListApi.getListDetail(id).subscribe(res => {
      console.dir(res);
    });
  }
}
