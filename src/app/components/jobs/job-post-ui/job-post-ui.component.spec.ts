import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostUIComponent } from './job-post-ui.component';

describe('JobPostUIComponent', () => {
  let component: JobPostUIComponent;
  let fixture: ComponentFixture<JobPostUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
