import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [ 
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  
];
