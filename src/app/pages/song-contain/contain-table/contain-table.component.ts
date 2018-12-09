import { Component, OnInit, Input } from '@angular/core';
import { PlayListItem } from 'src/app/interfaces/playList';
import { StoreService } from '../../../services/store/store.service';
@Component({
  selector: 'app-contain-table',
  templateUrl: './contain-table.component.html',
  styleUrls: ['./contain-table.component.less']
})
export class ContainTableComponent implements OnInit {

  @Input()
  playList: PlayListItem;

  commentNum = 0;
  current = -1;

  constructor(
    public store: StoreService
  ) {
  }

  ngOnInit() {
  }

  handleClickRow (row: PlayListItem, number) {
    this.current = number;
    this.store.handleSetCurrent(row);
    console.log(row);
  }
}
