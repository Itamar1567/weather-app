import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatButtonModule, RouterModule],
  template: `
    <div class="layout">
      <ul class="layout-links">
        <li><img src="assets/images/logo.png" alt="Logo" id="logo"></li>
        <li><button mat-flat-button (click)="moveToHomePage()">Home</button></li>
        <li><button mat-flat-button>About</button></li>
        <li><button mat-flat-button (click)="moveToCurrentWeatherPage()">Current Weather</button></li>
      </ul>
    </div>
    <main><router-outlet></router-outlet></main>
    <div class="copyright"><p id="copyright-text">@Copyright: Itamar1567</p><div>
    
  `,
  styleUrls: ['./layout.css']
})
export class LayoutComponent {

  router: Router = inject(Router);

  moveToCurrentWeatherPage(){
    
    this.router.navigateByUrl("current");

  }   
   moveToHomePage(){
    
    this.router.navigateByUrl("");

  }   


}
