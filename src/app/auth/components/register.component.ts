import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1 class="auth-title">Register</h1>
        <form (ngSubmit)="onSubmit()">
          <input 
            type="text" 
            class="form-control" 
            [(ngModel)]="name" 
            name="name"
            placeholder="Name"
            required
          >
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
          <input 
            type="password" 
            class="form-control" 
            [(ngModel)]="confirmPassword" 
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          >
          
          <div class="checkbox-wrapper">
            <input 
              type="checkbox" 
              [(ngModel)]="acceptTerms" 
              name="acceptTerms"
              required
            >
            <label>Accept terms of use</label>
          </div>

          <button type="submit" class="btn btn-auth">Register</button>
          
          <div class="auth-links">
            <p>
              I have an account, <a routerLink="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['../styles/auth.styles.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  onSubmit() {
    console.log('Register attempt', {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      acceptTerms: this.acceptTerms
    });
  }
}