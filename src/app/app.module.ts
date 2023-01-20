import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenseItemComponent } from './expenses/item/expense-item.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ExpenseTrackerFormComponent } from './expenses/form/expense-tracker-form.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectComponent } from './expenses/category-select/category-select.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes : Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    ExpenseItemComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseTrackerFormComponent,
    CategorySelectComponent,
    IndexComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
