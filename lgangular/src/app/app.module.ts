import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductComponent } from './book-product/book-product.component';
import { BookSummaryService } from './book-summary.service';



@NgModule({
  declarations: [
    AppComponent,
    BookProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BookRetailComponent
  ],
  providers:[
    BookSummaryService
  ],

  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
