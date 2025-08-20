import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentComponent } from './current.component/current.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'current',
    component: CurrentComponent,
    title: 'Current Weather Page'
  }
];
