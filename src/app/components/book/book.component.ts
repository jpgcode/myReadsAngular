import { Component, ViewEncapsulation, Input } from '@angular/core';

import { BooksApiService } from '../../services/booksApi.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookComponent {

  @Input() book;
  @Input() shelf;

  constructor(private BooksApiService: BooksApiService) { }

  ngOnInit() {

  }

  public bookAuthors(authors) {
    return (authors && authors.lenght > 1) ? authors.join(',') : authors;
  }

  public updateShelf(bookUpdated, e) {

    this.BooksApiService.update(bookUpdated, e.target.value)
      .subscribe((data) => {
        this.BooksApiService.getAll()
          .subscribe(data => this.BooksApiService.books$.next(data.books));
      });
  }
}
