import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // mock login for purpose of demonstrating using the guards and auth service
  onSubmit() {
    this.authService
      .login()
      .pipe(map(() => this.router.navigate(['/'])))
      .subscribe();
  }
}
