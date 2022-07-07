import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup30Component } from './popup30.component';

describe('Popup30Component', () => {
  let component: Popup30Component;
  let fixture: ComponentFixture<Popup30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popup30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
