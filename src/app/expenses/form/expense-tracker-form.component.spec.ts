import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerFormComponent } from './expense-tracker-form.component';

describe('ExpenseTrackerFormComponent', () => {
  let component: ExpenseTrackerFormComponent;
  let fixture: ComponentFixture<ExpenseTrackerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
