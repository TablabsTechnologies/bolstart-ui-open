import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup8Component } from './popup8.component';

describe('Popup8Component', () => {
  let component: Popup8Component;
  let fixture: ComponentFixture<Popup8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
