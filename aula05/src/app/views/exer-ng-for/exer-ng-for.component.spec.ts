import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerNgForComponent } from './exer-ng-for.component';

describe('ExerNgForComponent', () => {
  let component: ExerNgForComponent;
  let fixture: ComponentFixture<ExerNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
