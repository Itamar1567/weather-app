import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, MatButtonModule],
  template: '<app-layout></app-layout>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Weather_App');
}
