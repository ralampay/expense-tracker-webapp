import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent {
  @Output() categorySelectedEvent : EventEmitter<any> = new EventEmitter<any>()

  categories : Category[] = [
    {
      id: 1,
      name: "Category A"
    },
    {
      id: 2,
      name: "Category B"
    }
  ]

  handler = (payload: any) => {
    let category_id = payload.target.value
    this.categorySelectedEvent.emit({ id: category_id })
  }
}
