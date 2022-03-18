import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercico01Component } from './exercico01.component';

describe('Exercico01Component', () => {
  let component: Exercico01Component;
  let fixture: ComponentFixture<Exercico01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercico01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercico01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
