import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup13Component } from './popup13.component';

describe('Popup13Component', () => {
  let component: Popup13Component;
  let fixture: ComponentFixture<Popup13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
