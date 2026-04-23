// features/auth/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        console.log('Login ok');
      },
      error: () => {
        console.log('Errore login');
      }
    });
  }
}