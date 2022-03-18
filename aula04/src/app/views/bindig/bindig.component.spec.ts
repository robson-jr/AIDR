import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindigComponent } from './bindig.component';

describe('BindigComponent', () => {
  let component: BindigComponent;
  let fixture: ComponentFixture<BindigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
