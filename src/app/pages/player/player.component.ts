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
  currentTime = 0;
  volume = 100;
  currentSong: PlayListItem;
  playUrl: string;
  audioDom: HTMLAudioElement; // 此处不能设置为ElementRef，因为ElementRef上面没有audio的各种事件
  paused = true;
  timer: any;
  maxTime = 0;
  loopType: 'sigleLoop' | 'listLoop' | 'randomLoop' = 'sigleLoop';
  constructor(
    public store: StoreService,
    public playService: PlayListService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.store.current$.subscribe(data => {
      this.currentSong = data as PlayListItem;
      console.log(this.currentSong, 'current');
      this.playService.getSongUrl(this.currentSong.id).subscribe(res  => {
        if (res.code === 200) {
          console.log(res);
          this.playUrl = res.data[0].url;
          this.audioDom.addEventListener('loadedmetadata', () => {
            console.log('loadedmetadata');
            this.playInit();
          });
          this.audioDom.addEventListener('ended', () => {
            if (this.loopType === 'sigleLoop') {
              this.setCurrentTime(0);
              this.audioDom.play();
            }
          });
        }
      });
    });
  }

  ngAfterViewInit () {
    this.audioDom = this.elementRef.nativeElement.querySelector('#audioDom');
  }

  playInit () {
    this.audioDom.play();
    this.setStatus();
    this.currentTime = 0;
    this.maxTime = parseInt(String(this.audioDom.duration), 10);
  }

  setVolume (v) {
    this.audioDom.volume = v / 100;
  }

  setStatus () {
    this.paused = this.audioDom.paused;
    if (!this.paused) {
      this.resetTimer();
    } else {
      this.clearTimer();
    }
  }

  setTimer () {
    this.getCurrentTime();
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  clearTimer () {
    clearInterval(this.timer);
    this.timer = null;
  }

  resetTimer () {
    this.clearTimer();
    this.setTimer();
  }

  getCurrentTime () {
    this.currentTime = this.audioDom.currentTime;
    console.log(this.currentTime);
  }

  setCurrentTime (v) {
    this.audioDom.currentTime = v;
    this.getCurrentTime();
    this.resetTimer();
  }

  filterTime (time: number) {
    const minute = parseInt(String(time / 60), 10);
    const second = parseInt(String(time - minute * 60), 10);
    return `${minute >= 10 ? minute : '0' + minute}:${second >= 10 ? second : '0' + second }`;
  }

  handleTogglePlay () {
    if (this.paused) {
      this.audioDom.play();
    } else {
      this.audioDom.pause();
    }
    this.setStatus();
  }

}
