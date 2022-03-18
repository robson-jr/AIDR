import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerNgSwitch01Component } from './exer-ng-switch01.component';

describe('ExerNgSwitch01Component', () => {
  let component: ExerNgSwitch01Component;
  let fixture: ComponentFixture<ExerNgSwitch01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerNgSwitch01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerNgSwitch01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
