import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup21Component } from './popup21.component';

describe('Popup21Component', () => {
  let component: Popup21Component;
  let fixture: ComponentFixture<Popup21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
