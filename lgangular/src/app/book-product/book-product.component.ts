import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrl: './book-product.component.scss'
})
export class BookProductComponent implements OnInit {

  @Input("selectedBook") selectedBook!: string;

 
  ngOnInit(): void {
    
  }
  

}
