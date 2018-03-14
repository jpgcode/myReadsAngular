import { Component } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  public title:string = 'app';

  constructor() { }

  ngOnInit() {

  }
}
