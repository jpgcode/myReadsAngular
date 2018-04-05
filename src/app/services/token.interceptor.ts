import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!localStorage.token) {
      localStorage.token = Math.random().toString(36).substr(-8);
    }

    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request);
  }
}
