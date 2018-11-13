import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainTableComponent } from './contain-table.component';

describe('ContainTableComponent', () => {
  let component: ContainTableComponent;
  let fixture: ComponentFixture<ContainTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
