import { Component, OnInit, Input } from '@angular/core';
import { PlayListItem } from 'src/app/interfaces/playList';
@Component({
  selector: 'app-contain-table',
  templateUrl: './contain-table.component.html',
  styleUrls: ['./contain-table.component.less']
})
export class ContainTableComponent implements OnInit {

  @Input()
  playList: PlayListItem;

  commentNum = 0;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
