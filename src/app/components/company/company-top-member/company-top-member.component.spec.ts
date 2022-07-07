import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTopMemberComponent } from './company-top-member.component';

describe('CompanyTopMemberComponent', () => {
  let component: CompanyTopMemberComponent;
  let fixture: ComponentFixture<CompanyTopMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTopMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTopMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
