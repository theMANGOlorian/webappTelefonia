// features/auth/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    email = '';
    password = '';
    username = '';
    nome  = '';
    cognome  = '';
    piva  = '';
    isAzienda = false;
    confirmPassword = '';

    constructor(private auth: AuthService) {}

    onSubmit() {
        this.auth.register({
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            username: this.username,
            nome: this.nome,
            cognome: this.cognome,
            piva: this.piva,
            isAzienda: this.isAzienda,
        }).subscribe(() => {
            console.log('Registrazione ok');
        });
    }
}
