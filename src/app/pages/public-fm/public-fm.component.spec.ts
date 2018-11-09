import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFmComponent } from './public-fm.component';

describe('PublicFmComponent', () => {
  let component: PublicFmComponent;
  let fixture: ComponentFixture<PublicFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
