import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { LoggerInterceptor } from './logger.interceptor';

/*
  - good practice to keep the interceptors in one place and export them together since
  - all of them are always executed (in order), to avoid the effects on a specific request
    it should be handled in the interceptor itself
  - multi is necessary when using multiple services (as an array) for the same token
  https://angular.io/guide/http-intercept-requests-and-responses#provide-the-interceptor
*/
export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
