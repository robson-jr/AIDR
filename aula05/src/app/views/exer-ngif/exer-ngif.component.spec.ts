import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerNgifComponent } from './exer-ngif.component';

describe('ExerNgifComponent', () => {
  let component: ExerNgifComponent;
  let fixture: ComponentFixture<ExerNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
