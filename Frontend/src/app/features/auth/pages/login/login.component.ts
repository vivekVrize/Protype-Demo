import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '@core/services/auth.service';

interface DemoAccount {
  username: string;
  password: string;
  name: string;
  role: string;
  description: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  showDemoAccounts = true;
  errorMessage = '';

  demoAccounts: DemoAccount[] = [
    {
      username: 'procurement1',
      password: 'password123',
      name: 'Sarah Tan',
      role: 'Procurement Officer',
      description: 'Create RFQs, Open & Evaluate Quotations',
      color: 'primary',
      icon: 'assignment'
    },
    {
      username: 'approver1',
      password: 'password123',
      name: 'David Lim',
      role: 'Approving Authority',
      description: 'Approve RFQs & Award Decisions',
      color: 'accent',
      icon: 'verified'
    },
    {
      username: 'witness1',
      password: 'password123',
      name: 'Emily Wong',
      role: 'Witness Officer',
      description: 'Witness Quotation Opening',
      color: 'warn',
      icon: 'visibility'
    },
    {
      username: 'supplier1',
      password: 'password123',
      name: 'John Chen (Acme Corp)',
      role: 'Supplier',
      description: 'Submit Quotations & View Awards',
      color: 'primary',
      icon: 'store'
    },
    {
      username: 'supplier2',
      password: 'password123',
      name: 'Mary Lee (Best Builders)',
      role: 'Supplier',
      description: 'Construction Specialist',
      color: 'primary',
      icon: 'construction'
    },
    {
      username: 'supplier3',
      password: 'password123',
      name: 'Kumar Raj (Global Services)',
      role: 'Supplier',
      description: 'Multi-Service Provider',
      color: 'primary',
      icon: 'business'
    },
    {
      username: 'admin',
      password: 'password123',
      name: 'Admin User',
      role: 'Administrator',
      description: 'Full System Access',
      color: 'warn',
      icon: 'admin_panel_settings'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  fillDemoAccount(account: DemoAccount): void {
    this.loginForm.patchValue({
      username: account.username,
      password: account.password
    });
    this.errorMessage = '';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (success) => {
          if (success) {
            // Router navigation handled by AuthService
          } else {
            this.errorMessage = 'Invalid credentials. Please try again.';
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      });
    }
  }

  toggleDemoAccounts(): void {
    this.showDemoAccounts = !this.showDemoAccounts;
  }
}
