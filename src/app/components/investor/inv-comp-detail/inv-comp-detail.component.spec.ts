import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvCompDetailComponent } from './inv-comp-detail.component';

describe('InvCompDetailComponent', () => {
  let component: InvCompDetailComponent;
  let fixture: ComponentFixture<InvCompDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvCompDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvCompDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
