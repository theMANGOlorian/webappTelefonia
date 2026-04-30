// features/auth/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

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

    constructor(private auth: AuthService, private router: Router) {}

    onSubmit() {
        this.auth.register({
            email: this.email,
            username: this.username,
            nome: this.nome,
            cognome: this.cognome,
            confirmPassword: this.confirmPassword,
            password: this.password,
            isAzienda: this.isAzienda,
            piva: this.piva,
        }).subscribe({
          next: () => {
            console.log('Registrazione OK');
            this.router.navigate(['/login']);
          },
          error: (err) => {
            console.error('Errore registrazione', err);

            if (err.status === 409) {
              alert('Utente già esistente');
            }
          }
        });
    }
}
