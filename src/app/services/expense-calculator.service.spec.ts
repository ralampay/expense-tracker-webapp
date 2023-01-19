import { TestBed } from '@angular/core/testing';

import { ExpenseCalculatorService } from './expense-calculator.service';

describe('ExpenseCalculatorService', () => {
  let service: ExpenseCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
