import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJobDetailsFormComponent } from './get-job-details-form.component';

describe('GetJobDetailsFormComponent', () => {
  let component: GetJobDetailsFormComponent;
  let fixture: ComponentFixture<GetJobDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJobDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJobDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
