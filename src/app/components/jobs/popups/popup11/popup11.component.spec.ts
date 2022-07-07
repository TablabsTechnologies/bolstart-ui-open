import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup11Component } from './popup11.component';

describe('Popup11Component', () => {
  let component: Popup11Component;
  let fixture: ComponentFixture<Popup11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
