import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayListItem } from 'src/app/interfaces/playList';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  currentPlaySubject = new Subject();
  current$ = this.currentPlaySubject.asObservable();
  constructor() { }

  handleSetCurrent (data: PlayListItem) {
    // TODO:
    this.currentPlaySubject.next(data);
  }
}
