import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Sent) this.logSent(request);
        if (event.type === HttpEventType.Response) this.logResponse(event);
      })
    );
  }

  private logSent(event: HttpRequest<unknown>) {
    console.log(`Request sent to ${event.url}`);
  }

  private logResponse(response: HttpResponse<unknown>) {
    console.log(`Response received with status ${response.status}`);
  }
}
