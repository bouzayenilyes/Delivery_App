import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1 class="auth-title">Login</h1>
        <form (ngSubmit)="onSubmit()">
          <input 
            type="email" 
            class="form-control" 
            [(ngModel)]="email" 
            name="email"
            placeholder="Email"
            required
          >
          <input 
            type="password" 
            class="form-control" 
            [(ngModel)]="password" 
            name="password"
            placeholder="Password"
            required
          >
          <button type="submit" class="btn btn-auth">Login</button>
          
          <div class="auth-links">
            <a routerLink="/forgot-password">Forgot password?</a>
            <p class="mt-3">
              I don't have an account, <a routerLink="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['../styles/auth.styles.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt', { email: this.email, password: this.password });
  }
}