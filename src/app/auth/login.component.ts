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
      <div class="login-container">
        <form (ngSubmit)="onSubmit()" class="login-form">
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
          <button type="submit" class="login-button">Login</button>
          <div class="links-container">
            <a routerLink="/forgot-password" class="forgot-link">forgot password</a>
            <div class="register-link">
              I don't have an account, <a routerLink="/register">Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background-image: url('/assets/olive.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .login-container {
      width: 100%;
      max-width: 400px;
      padding: 2rem;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      
      &::placeholder {
        color: #666;
      }
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 77, 64, 0.2);
      }
    }

    .login-button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: rgb(0, 77, 64);
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgb(0, 95, 80);
      }
    }

    .links-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .forgot-link {
      color: #666;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
      }
    }

    .register-link {
      text-align: center;
      color: #333;
      font-size: 0.9rem;

      a {
        color: rgb(0, 77, 64);
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Implement login logic here
    console.log('Login attempt', { email: this.email, password: this.password });
  }
}