import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLisstComponent } from './comment-lisst.component';

describe('CommentLisstComponent', () => {
  let component: CommentLisstComponent;
  let fixture: ComponentFixture<CommentLisstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentLisstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
