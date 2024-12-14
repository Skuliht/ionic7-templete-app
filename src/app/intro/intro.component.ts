import { Component, OnInit } from '@angular/core';

interface Book{
  b_avtor:string,
  b_nazv: string
}



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent  implements OnInit {
  
  books: Book[] = [
    {
      b_avtor:"Лопухов",
      b_nazv:"Лопухи"
    }, 
    {
      b_avtor:"Собакин",
      b_nazv:"Собаки"
    }, 
    {
      b_avtor:"Ласточкин",
      b_nazv:"Ласточки"
    }
  ]  
  constructor() { }

  ngOnInit() {}
  

}
