import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../core/services/error.service';

@Component({
  selector: 'app-error-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isDisplayed" class="errorBox">
      {{ message }}
    </div>
  `,
  styles: [`
    .errorBox {
      position: fixed;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -30px);
      opacity: 0;

      background: #e74c3c;
      color: white;
      padding: 40px 100px;
      border-radius: 8px;
      z-index: 9999;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);

      min-width: 200px;
      text-align: center;

      animation: slideDown 0.4s ease-out forwards;
    }

    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translate(-50%, -60px);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  `]
})
export class ErrorBoxComponent {

  message: string | null = null;
  isDisplayed = false;

  constructor(
    private errorService: ErrorService,
    private cdr: ChangeDetectorRef
  ) {

    this.errorService.error$.subscribe((msg: string) => {

      // mostra errore
      this.message = msg;
      this.isDisplayed = true;

      // forza update UI
      this.cdr.detectChanges();

      // nasconde dopo 3 secondi
      setTimeout(() => {
        this.message = null;
        this.isDisplayed = false;

        this.cdr.detectChanges();
      }, 3000);

    });
  }
}