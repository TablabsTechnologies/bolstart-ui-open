import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocUiComponent } from './update-doc-ui.component';

describe('UpdateDocUiComponent', () => {
  let component: UpdateDocUiComponent;
  let fixture: ComponentFixture<UpdateDocUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDocUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDocUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
