import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [ 
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
   
    { path: 'category/:category', component: CategoryComponent }, // Dynamic route for categories
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to Home
    { path: '**', redirectTo: '/home' }, // Redirect unknown routes to Home
  
];
