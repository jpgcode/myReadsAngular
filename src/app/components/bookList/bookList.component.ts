import { Component } from '@angular/core';

@Component({
  selector: 'booklist',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css']
})

export class BookListComponent {

  public title:string = 'app';

  constructor() { }

  ngOnInit() {

  }
}
