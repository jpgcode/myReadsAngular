import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FiltersService {

  public api: String = 'https://reactnd-books-api.udacity.com';
  public token: any;
  public headers: Object;

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

  public get(bookId): Observable<Object> {
    return this.http.get(`${this.api}/books/${bookId}`);
  }

  public getAll(): Observable<Object> {
    return this.http.get(`${this.api}/books`);
  }

  public update(book, shelf): Observable<Object> {
    return this.http.put(`${this.api}/books/${book.id}`, JSON.stringify({ shelf }));
  }

  public search(query, maxResults): Observable<Object> {
    return this.http.post(`${this.api}/search`, JSON.stringify({ query, maxResults }));
  }






}
