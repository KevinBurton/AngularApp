import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <nav>
      <a href="/angular">Angular</a>
      |
      <a href="/home">Home</a>
      |
      <a href="/counter">Counter</a>
      |
      <a href="/weather">Weather</a>
    </nav>
    <router-outlet />
  `
})
export class App {
  protected readonly title = signal('angularapp');
}
