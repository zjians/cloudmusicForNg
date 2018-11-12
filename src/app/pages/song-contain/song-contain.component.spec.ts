import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongContainComponent } from './song-contain.component';

describe('SongContainComponent', () => {
  let component: SongContainComponent;
  let fixture: ComponentFixture<SongContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
