import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup12Component } from './popup12.component';

describe('Popup12Component', () => {
  let component: Popup12Component;
  let fixture: ComponentFixture<Popup12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
