import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNewJobPostComponent } from './publish-new-job-post.component';

describe('PublishNewJobPostComponent', () => {
  let component: PublishNewJobPostComponent;
  let fixture: ComponentFixture<PublishNewJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishNewJobPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNewJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
