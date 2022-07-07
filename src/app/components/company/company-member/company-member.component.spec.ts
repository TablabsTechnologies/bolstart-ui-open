import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMemberComponent } from './company-member.component';

describe('CompanyMemberComponent', () => {
  let component: CompanyMemberComponent;
  let fixture: ComponentFixture<CompanyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
