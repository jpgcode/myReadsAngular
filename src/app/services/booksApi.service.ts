import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import { Books } from '../interfaces/books';

@Injectable()
export class BooksApiService {

  public api: String = 'https://reactnd-books-api.udacity.com';
  public token: any;
  public headers: any;

  constructor(private http: HttpClient) {

    // Set token
    if (!this.token){
      this.token = localStorage.token = Math.random().toString(36).substr(-8)
    }

    // Set headers
    this.headers = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Authorization': this.token
      })
    };

  }

  public get(bookId): any {
    return this.http.get(`${this.api}/books/${bookId}`, this.headers);
  }

  public getAll(): any {
    return this.http.get(`${this.api}/books`, this.headers);
  }

  public update(book, shelf): any {
    return this.http.put(`${this.api}/books/${book.id}`, JSON.stringify({ shelf }, this.headers));
  }

  public search(query, maxResults): any {
    return this.http.post(`${this.api}/search`, JSON.stringify({ query, maxResults }, this.headers));
  }

}
