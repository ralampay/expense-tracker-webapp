import { Injectable } from '@angular/core';
import {ExpenseItem} from '../models/expense-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseItemsService {

  baseUrl : string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAll = (): Observable<ExpenseItem[]> => {
    let items: Observable<ExpenseItem[]>

    items = this.http.get<ExpenseItem[]>(`${this.baseUrl}/expenses`, httpOptions)

    return items
  }

  getById = (id : number) : Observable<ExpenseItem> => {
    let item : Observable<ExpenseItem>

    item = this.http.get<ExpenseItem>(`${this.baseUrl}/expenses/${id}`, httpOptions)

    return item
  }

  save = (expenseItem : ExpenseItem) : Observable<ExpenseItem> => {
    let item : Observable<ExpenseItem>

    if(expenseItem.id) {
      // Perform Update: PUT /expenses/:id
      const url = `${this.baseUrl}/expenses/${expenseItem.id}`

      item = this.http.put<ExpenseItem>(url, expenseItem, httpOptions)
    } else {
      // Perform Create: POST /expenses
      
      item = this.http.post<ExpenseItem>(`${this.baseUrl}/expenses`, expenseItem, httpOptions)
    }

    return item
  }
}
