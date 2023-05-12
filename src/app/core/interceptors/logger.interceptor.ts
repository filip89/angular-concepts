import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap((event) => this.log(request, event)));
  }

  private log(request: HttpRequest<unknown>, event: HttpEvent<unknown>) {
    if (event.type === HttpEventType.Sent) {
      console.log(`Request sent to ${request.url}`);
    }
    if (event.type === HttpEventType.Response) {
      console.log(`Response received with status ${event.status}`);
    }
  }
}
