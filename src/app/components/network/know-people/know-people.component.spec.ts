import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowPeopleComponent } from './know-people.component';

describe('KnowPeopleComponent', () => {
  let component: KnowPeopleComponent;
  let fixture: ComponentFixture<KnowPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
