import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDetailsListComponent } from './applicant-details-list.component';

describe('ApplicantDetailsListComponent', () => {
  let component: ApplicantDetailsListComponent;
  let fixture: ComponentFixture<ApplicantDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
