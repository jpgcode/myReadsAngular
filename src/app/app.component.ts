import { Component } from '@angular/core';

import { BooksApiService } from './services/booksApi.service';
import { Subject } from 'rxjs/Subject';

import { Books } from './interfaces/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public books;


  constructor(private BooksApiService: BooksApiService) { }

  ngOnInit() {

    this.getBooks();

  }

  private getBooks() {
    this.BooksApiService.getAll()
      .subscribe(data => this.BooksApiService);
  }
}
