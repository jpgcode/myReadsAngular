import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'shelflist',
  templateUrl: './shelfList.component.html',
  styleUrls: ['./shelfList.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShelfListComponent {

  @Input() books;
  @Input() shelfs;

  constructor() { }

  ngOnInit() {

  }

  public booksInShelf(shelf) {
    return this.books.filter(item => item.shelf === shelf);
  }

}
