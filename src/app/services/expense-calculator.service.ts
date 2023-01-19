import { Injectable } from '@angular/core';
import { ExpenseItem } from '../models/expense-item';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCalculatorService {

  constructor() { }

  computeAllExpenses = (expenseItems: ExpenseItem[]): number => {
    let total = 0.00

    expenseItems.forEach((expenseItem: ExpenseItem) => {
      total = total + expenseItem.amount
    })

    return total
  }

  computeAverageExpenses = (expenseItems: ExpenseItem[]): number => {
    let total = this.computeAllExpenses(expenseItems)
    let ave = total / expenseItems.length

    return ave
  }
}
