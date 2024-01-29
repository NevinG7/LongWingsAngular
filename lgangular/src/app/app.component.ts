import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Book List';
  public SubTitle = 'Sub Title';
  public selectedBook ='';

  public showSelectedBook(selectBook:string){
    this.selectedBook=selectBook;
  }
}
