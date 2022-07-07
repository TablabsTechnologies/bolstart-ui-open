import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNetworkComponent } from './manage-network.component';

describe('ManageNetworkComponent', () => {
  let component: ManageNetworkComponent;
  let fixture: ComponentFixture<ManageNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
