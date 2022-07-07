import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPublishComponent } from './company-publish.component';

describe('CompanyPublishComponent', () => {
  let component: CompanyPublishComponent;
  let fixture: ComponentFixture<CompanyPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
