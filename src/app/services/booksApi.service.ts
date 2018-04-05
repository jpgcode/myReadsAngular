import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import { Books } from '../interfaces/books';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BooksApiService {

  private api: String = 'https://reactnd-books-api.udacity.com';
  private token: any;
  private headers: any;

  public books$ = new Subject<any>();

  constructor(private http: HttpClient) {



    // Set headers
    this.headers = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Authorization': this.token
      })
    };

  }

  public get(bookId): any {
    return this.http.get(`${this.api}/books/${bookId}`);
  }

  public getAll(): any {
    return this.http.get(`${this.api}/books`);
  }

  public update(book, shelf): any {
    return this.http.put(`${this.api}/books/${book.id}`, JSON.stringify({ shelf }));
  }

  public search(query, maxResults): any {
    return this.http.post(`${this.api}/search`, JSON.stringify({ query, maxResults }));
  }

}
