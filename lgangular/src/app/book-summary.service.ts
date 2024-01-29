import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSummaryService {

  public summarymap=[
    {
    bookname:"Fire",
    summary:"big fire is here"
  },
  {
    bookname:"Water",
    summary:"massive amount of water"
  },
  {
    bookname:"How to Ninja",
    summary:"How to becoma ninja in a week"
  },
  {
    bookname:"How to eat",
    summary:"Learn how to eat now"
  },
  {
    bookname:"Chronicles of Narnia",
    summary:"very good book"
  },
  {
    bookname:"New Mind",
    summary:"super book"
  }
  
]


  constructor() { }

  public getSummary(name:string){
    
    let found=this.summarymap.find((obj)=>obj.bookname==name)
    let sent=found?.summary.split(" ");
    let newSent="";
    sent?.forEach((element:string)=>{
      //  newSent+=element.charAt(0).toUpperCase() + element.slice(1)+" ";
      newSent+= element[0].toUpperCase() + element.slice(1)+" ";
    })
    
    return newSent
  }

}
