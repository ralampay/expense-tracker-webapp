import { Component, Input } from '@angular/core';
import { ExpenseItem } from '../../models/expense-item';

@Component({
  selector: 'expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent {
  @Input() expenseItem: ExpenseItem
}
