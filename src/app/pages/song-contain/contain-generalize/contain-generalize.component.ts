import { Component, OnInit, Input } from '@angular/core';
import { SongListInfo } from 'src/app/interfaces/song-list-info';

@Component({
  selector: 'app-contain-generalize',
  templateUrl: './contain-generalize.component.html',
  styleUrls: ['./contain-generalize.component.less']
})
export class ContainGeneralizeComponent implements OnInit {
  @Input()
  listInfo: SongListInfo;

  constructor() { }

  ngOnInit() {
  }

}
