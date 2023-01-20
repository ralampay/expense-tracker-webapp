import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseItem } from 'src/app/models/expense-item';

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

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(`ShowComponent for id ${this.id}`)
  }

}
