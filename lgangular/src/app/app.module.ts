import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductComponent } from './book-product/book-product.component';
import { BookSummaryService } from './book-summary.service';
import { BackgroundBlue } from './book-product/background-blue';



@NgModule({
  declarations: [
    AppComponent,
    BookProductComponent,
    BackgroundBlue
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BookRetailComponent
  ],
  providers:[
    BookSummaryService
  ],
  exports:[
    BackgroundBlue
  ],

  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
