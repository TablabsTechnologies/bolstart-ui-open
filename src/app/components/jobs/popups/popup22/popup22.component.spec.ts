import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup22Component } from './popup22.component';

describe('Popup22Component', () => {
  let component: Popup22Component;
  let fixture: ComponentFixture<Popup22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
