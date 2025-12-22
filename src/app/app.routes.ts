import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user/login/login').then(l => l.LoginComponent)
  },
  {
    path: "login",
    loadComponent: () => import('./user/login/login').then(l => l.LoginComponent)
  },
  {
    path: "signup",
    loadComponent: () => import('./user/signup/signup').then(l => l.SignupComponent)
  },
  { 
    path: 'change-password', 
    loadComponent: () => import('./user/change-password/change-password').then(m => m.ChangePasswordComponent)
  },
  {
    path: "forgot",
    loadComponent: () => import('./user/forgot/forgot').then(l => l.ForgotComponent)
  },
];
