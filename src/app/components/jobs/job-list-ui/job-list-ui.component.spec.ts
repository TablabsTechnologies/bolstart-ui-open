import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListUiComponent } from './job-list-ui.component';

describe('JobListUiComponent', () => {
  let component: JobListUiComponent;
  let fixture: ComponentFixture<JobListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
