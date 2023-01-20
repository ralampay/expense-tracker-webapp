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
}
