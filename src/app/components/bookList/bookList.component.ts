
import { Component, ViewEncapsulation } from '@angular/core';
import { BooksApiService } from '../../services/booksApi.service';
import { Books } from '../../interfaces/books';

@Component({
  selector: 'booklist',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookListComponent {

  private title: string = 'My Reads';
  private books;
  private shelfs;

  constructor(private BooksApiService: BooksApiService) { }

  ngOnInit() {
    this.BooksApiService.books$.subscribe(books => {
      this.books = books;
      this.shelfs = Array.from(new Set(books.map((item) => item.shelf)))
    });
  }
}
