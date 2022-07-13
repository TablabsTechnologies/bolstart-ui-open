import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupJobApplyer } from './popup_job_applyer.component';
describe('Popup6Component', () => {
  let component: PopupJobApplyer;
  let fixture: ComponentFixture<PopupJobApplyer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupJobApplyer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupJobApplyer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
