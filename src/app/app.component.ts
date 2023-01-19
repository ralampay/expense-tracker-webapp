import { Component } from '@angular/core';
import { ExpenseItem } from './models/expense-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Expense Tracker";
  description: string = "An expense tracker for personal use";

  expenseItems: ExpenseItem[] = [];

  categoryId : number

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
  }
}
