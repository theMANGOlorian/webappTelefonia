import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ErrorBoxComponent } from './dialog-box/error-box/error-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ErrorBoxComponent, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('webapp-angular');

  // stato scroll
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
