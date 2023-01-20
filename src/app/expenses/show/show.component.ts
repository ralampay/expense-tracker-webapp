import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseItem } from 'src/app/models/expense-item';
import {ExpenseItemsService} from 'src/app/services/expense-items.service';

@Component({
  selector: 'app-expense-item-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  id : number

  expenseItem : ExpenseItem = {
    name: '',
    amount: 0.00
  }

  constructor(
    private route : ActivatedRoute, 
    private expenseItemsService : ExpenseItemsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(`ShowComponent for id ${this.id}`)

    this.expenseItemsService.getById(this.id).subscribe((item) => {
      this.expenseItem = item
    })
  }

}
