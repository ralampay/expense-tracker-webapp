import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ExpenseItemsService} from 'src/app/services/expense-items.service';
import { ExpenseItem } from '../../models/expense-item';

@Component({
  selector: 'app-expense-tracker-form',
  templateUrl: './expense-tracker-form.component.html',
  styleUrls: ['./expense-tracker-form.component.scss']
})
export class ExpenseTrackerFormComponent {

  constructor(
    private expenseItemsService : ExpenseItemsService
  ) {
  }

  @Input() expenseItem: ExpenseItem = {
    name: "",
    amount: 0.00,
    category_id: 0
  }

  @Output() formEvent: EventEmitter<ExpenseItem> = new EventEmitter<ExpenseItem>()

  btnClicked = () => {
    console.log("Button was clicked")

    // Copying the actual object into o
    let o = { ...this.expenseItem }
    console.log(this.expenseItem)

    this.expenseItemsService.save(o).subscribe((savedExpenseItem) => {
      console.log(savedExpenseItem)
      this.formEvent.emit(savedExpenseItem)
    })
  }
}
