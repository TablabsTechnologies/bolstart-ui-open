import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePublishComponent } from './timeline-publish.component';

describe('TimelinePublishComponent', () => {
  let component: TimelinePublishComponent;
  let fixture: ComponentFixture<TimelinePublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinePublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
