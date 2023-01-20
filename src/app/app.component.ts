import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from './models/expense-item';
import {ExpenseCalculatorService} from './services/expense-calculator.service';
import {ExpenseItemsService} from './services/expense-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = "Expense Tracker";
  description: string = "An expense tracker for personal use";

  expenseItems: ExpenseItem[] = [];

  categoryId : number

  totalExpenses : number = 0.00
  averageExpenses : number = 0.00

  constructor(
    private expenseCalculatorService : ExpenseCalculatorService, 
    private expenseItemsService : ExpenseItemsService
  ) {}

  ngOnInit() : void {
    console.log("ngOnInit() fired for AppComponent")

    this.expenseItemsService.getAll().subscribe((expenseItems) => {
      this.expenseItems = expenseItems
    })
  }

  // Handler to update categoryId from category-select component event
  setCategoryId = (payload: any) => {
    this.categoryId = payload.id
  }

  formEventHandler = (payload: ExpenseItem) => {
    console.log("Handling formEventHandler...")
    console.log(payload)

    // Insert currently maintained categoryId to the payload before adding to list
    payload.category_id = this.categoryId

    this.expenseItems.push(payload)
    this.totalExpenses = this.expenseCalculatorService.computeAllExpenses(this.expenseItems)
    this.averageExpenses = this.expenseCalculatorService.computeAverageExpenses(this.expenseItems)
  }
}
