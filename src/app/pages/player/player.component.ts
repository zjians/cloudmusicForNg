import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { PlayListItem } from 'src/app/interfaces/playList';
import { PlayListService } from 'src/app/services/play-list/play-list.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  time = '00:00';
  volume = 0;
  currentSong: PlayListItem;
  playUrl: string;
  audioDom; // 我设置为ElementRef为什么会导致下面使用this.audioDom.paused报错
  constructor(
    public store: StoreService,
    public playService: PlayListService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.store.current$.subscribe(data => {
      this.currentSong = data as PlayListItem;
      this.playService.getSongUrl(this.currentSong.id).subscribe(res  => {
        if (res.code === 200) {
          this.playUrl = res.data[0].url;
        }
      });
    });
  }

  ngAfterViewInit () {
    this.audioDom = this.elementRef.nativeElement.querySelector('#audioDom');
    // this.audioDom.progress(data => {
    //   console.log(data);
    //   console.log('加载中。。');
    // });
    console.dir(this.audioDom);
  }

  handleTogglePlay () {
    if (this.audioDom.paused) {
      this.audioDom.play();
      return;
    }
    this.audioDom.pause();
  }

}
