import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerNgFor02Component } from './exer-ng-for02.component';

describe('ExerNgFor02Component', () => {
  let component: ExerNgFor02Component;
  let fixture: ComponentFixture<ExerNgFor02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerNgFor02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerNgFor02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
