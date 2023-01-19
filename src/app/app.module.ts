import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseItemComponent } from './expenses/item/expense-item.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ExpenseTrackerFormComponent } from './expenses/form/expense-tracker-form.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectComponent } from './expenses/category-select/category-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseItemComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseTrackerFormComponent,
    CategorySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
