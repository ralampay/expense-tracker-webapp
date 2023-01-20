import { TestBed } from '@angular/core/testing';

import { ExpenseItemsService } from './expense-items.service';

describe('ExpenseItemsService', () => {
  let service: ExpenseItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
