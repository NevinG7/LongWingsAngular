import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookHelperService } from '../book-helper.service';
import { BookSummaryService } from '../book-summary.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[BookHelperService],

  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.scss'
})
export class BookRetailComponent implements OnInit  {
  book:any[]=[]
  authorBooks:any[]=[];
  public summary:string="";

  @Input("title") title1!: string;
  @Input("sub") SubTitle1!: string;
  @Output("selectedBook") selectedBook = new EventEmitter<string>() ;

  constructor(private readonly bookHelperService: BookHelperService, private readonly booksummary:BookSummaryService) {}



  ngOnInit(): void {
    this.book=[{author:"Jk Rowling",bookname:["Fire","Water"]},{author:"Adarsh R",bookname:["How to Ninja","How to eat"]},{author:"Pranoy Santosh",bookname:["Chronicles of Narnia","New Mind"]}]
  }
  
  public showbooks(index:number):void{
    this.authorBooks= this.book[index].bookname
    this.summary=""
    

  }

  public upcase(inp:Array<string>):void{
   this.authorBooks= this.bookHelperService.uppercaseBooks(inp)

  }
  public showSummary(name:string):void{
    this.summary= this.booksummary.getSummary(name)
    
  }
  
  public selectBook(index:number):void{
    const book = this.authorBooks[index]
    this.selectedBook.emit(book)
  }

}
