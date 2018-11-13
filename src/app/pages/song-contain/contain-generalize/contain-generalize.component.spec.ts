import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainGeneralizeComponent } from './contain-generalize.component';

describe('ContainGeneralizeComponent', () => {
  let component: ContainGeneralizeComponent;
  let fixture: ComponentFixture<ContainGeneralizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainGeneralizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainGeneralizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
