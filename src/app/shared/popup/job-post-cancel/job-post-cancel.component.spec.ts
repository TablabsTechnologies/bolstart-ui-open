import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostCancelComponent } from './job-post-cancel.component';

describe('JobPostCancelComponent', () => {
  let component: JobPostCancelComponent;
  let fixture: ComponentFixture<JobPostCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
