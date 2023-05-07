import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../injection-tokens/LocalStorage';
import { debounceTime, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: AuthService
})
export class AuthService {
  get isLoggedIn() {
    return !!this.token;
  }

  get token() {
    return this.localStorage.getItem('token');
  }

  protected set token(token: string | null) {
    if (token) {
      this.localStorage.setItem('token', token);
    } else {
      this.localStorage.removeItem('token');
    }
  }

  constructor(@Inject(LocalStorage) private localStorage: Storage) {}

  login() {
    // instead of injecting HttpClient we create a mock request
    return of('token-hash').pipe(
      debounceTime(200),
      map((token) => (this.token = token))
    );
  }

  logout() {
    this.token = null;
  }
}
