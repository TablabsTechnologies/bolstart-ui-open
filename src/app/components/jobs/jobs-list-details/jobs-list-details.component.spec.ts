import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListDetailsComponent } from './jobs-list-details.component';

describe('JobsListDetailsComponent', () => {
  let component: JobsListDetailsComponent;
  let fixture: ComponentFixture<JobsListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
