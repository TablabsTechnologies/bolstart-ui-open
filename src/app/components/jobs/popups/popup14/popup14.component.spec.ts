import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup14Component } from './popup14.component';

describe('Popup14Component', () => {
  let component: Popup14Component;
  let fixture: ComponentFixture<Popup14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
