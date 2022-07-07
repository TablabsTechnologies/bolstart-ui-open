import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishContainerComponent } from './publish-container.component';

describe('PublishContainerComponent', () => {
  let component: PublishContainerComponent;
  let fixture: ComponentFixture<PublishContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
