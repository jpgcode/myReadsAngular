import { Component, ViewEncapsulation } from '@angular/core';

import { BooksApiService } from './services/booksApi.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private BooksApiService: BooksApiService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.BooksApiService.getAll()
      .subscribe(data => this.BooksApiService.books$.next(data.books));
  }

}
