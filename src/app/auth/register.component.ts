import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2 class="text-center mb-6">Register</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <input 
            type="text" 
            class="form-control" 
            [(ngModel)]="name" 
            name="name"
            placeholder="Name"
            required
          >
        </div>
        <div class="form-group">
          <input 
            type="email" 
            class="form-control" 
            [(ngModel)]="email" 
            name="email"
            placeholder="Email"
            required
          >
        </div>
        <div class="form-group">
          <input 
            type="password" 
            class="form-control" 
            [(ngModel)]="password" 
            name="password"
            placeholder="Password"
            required
          >
        </div>
        <div class="form-group">
          <input 
            type="password" 
            class="form-control" 
            [(ngModel)]="confirmPassword" 
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          >
        </div>
        <div class="form-group">
          <label class="checkbox-container">
            <input 
              type="checkbox" 
              [(ngModel)]="acceptTerms" 
              name="acceptTerms"
              required
            >
            Accept terms of use
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <p class="text-center mt-4">
          I have an account, <a routerLink="/login" class="link">Login</a>
        </p>
      </form>
    </div>
  `,
  styles: [`
    .mb-6 { margin-bottom: 1.5rem; }
    .mt-4 { margin-top: 1rem; }
    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  onSubmit() {
    // Implement registration logic here
    console.log('Register attempt', {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      acceptTerms: this.acceptTerms
    });
  }
}