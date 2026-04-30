// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:3000';

  constructor(private http: HttpClient, private errorService:ErrorService) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.API}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  register(data: any) {
    if (data.password !== data.confirmPassword) {
      this.errorService.show("Passwords do not match");
      return throwError(() => new Error("Passwords do not match"));
    }
    if (data.piva === "") {
      data.piva = null;
    }
    return this.http.post(`${this.API}/users`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    return !!this.getToken();
  }
}