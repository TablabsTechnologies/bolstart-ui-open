import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyBottomSheetComponent } from './job-apply-bottom-sheet.component';

describe('JobApplyBottomSheetComponent', () => {
  let component: JobApplyBottomSheetComponent;
  let fixture: ComponentFixture<JobApplyBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplyBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
