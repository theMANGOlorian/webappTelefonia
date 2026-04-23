// features/auth/register/register.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    email = '';
    password = '';
    username = '';

    constructor(private auth: AuthService) {}

    onSubmit() {
        this.auth.register({
            email: this.email,
            password: this.password,
            username: this.username
        }).subscribe(() => {
            console.log('Registrazione ok');
        });
    }
}