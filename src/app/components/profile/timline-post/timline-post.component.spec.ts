import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimlinePostComponent } from './timline-post.component';

describe('TimlinePostComponent', () => {
  let component: TimlinePostComponent;
  let fixture: ComponentFixture<TimlinePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimlinePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimlinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
