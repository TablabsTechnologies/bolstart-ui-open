import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickapplyPopupComponent } from './quickapply-popup.component';

describe('QuickapplyPopupComponent', () => {
  let component: QuickapplyPopupComponent;
  let fixture: ComponentFixture<QuickapplyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickapplyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickapplyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
