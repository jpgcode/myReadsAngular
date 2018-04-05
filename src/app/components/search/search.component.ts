import { Component, ViewEncapsulation } from '@angular/core';
import { BooksApiService } from '../../services/booksApi.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {

  private books;
  private shelfs;
  private query;
  private showingBooks = [];

  constructor(private BooksApiService: BooksApiService) { }

  ngOnInit() {
    this.BooksApiService.books$.subscribe(books => {
      this.books = books;
      this.shelfs = Array.from(new Set(books.map((item) => item.shelf)))
    });
  }

  public booksInShelf() {

    return this.showingBooks.map(book => {
      const isBookInShelf = (this.books.find(bookInShelf => book.id === bookInShelf.id))
      book.shelf = (isBookInShelf) ? isBookInShelf.shelf : 'none';
      return book;
    })

  }

  public updateQuery(query) {
    this.query = query.trim();
    this.updateBooks(query);
  }

  public updateBooks(query) {
    if(query) {
      this.BooksApiService.search(query)
        .subscribe(res => {
          if(res){
            this.showingBooks = res.books;
          }else{
            this.showingBooks = [];
          }
        })
    }else{
      this.showingBooks = [];
    }
  }
}
