import { Component, signal } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-angular',
  templateUrl: './angular.html',
  styleUrl: './angular.css'
})
export class AngularComponent {
  protected readonly title = signal('angularapp');
}