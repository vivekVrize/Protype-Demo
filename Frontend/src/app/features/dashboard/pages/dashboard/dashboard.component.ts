import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/database/db';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p class="text-gray-600 mt-2">Welcome back, {{ currentUser?.name }}!</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <mat-card class="bg-blue-50 overflow-visible">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-sm text-gray-600">Active RFQs</p>
              <p class="text-3xl font-bold text-blue-600">5</p>
            </div>
            <mat-icon class="text-blue-600" style="font-size: 48px; width: 48px; height: 48px;">assignment</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-green-50 overflow-visible">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-sm text-gray-600">Pending Approvals</p>
              <p class="text-3xl font-bold text-green-600">2</p>
            </div>
            <mat-icon class="text-green-600" style="font-size: 48px; width: 48px; height: 48px;">pending_actions</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-purple-50 overflow-visible">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-sm text-gray-600">Open Quotations</p>
              <p class="text-3xl font-bold text-purple-600">8</p>
            </div>
            <mat-icon class="text-purple-600" style="font-size: 48px; width: 48px; height: 48px;">description</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-orange-50 overflow-visible">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-sm text-gray-600">Closing Soon</p>
              <p class="text-3xl font-bold text-orange-600">1</p>
            </div>
            <mat-icon class="text-orange-600" style="font-size: 48px; width: 48px; height: 48px;">schedule</mat-icon>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Getting Started</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="space-y-4">
            <p class="text-gray-600">
              Welcome to the E-Procurement System demo! This is Phase 1 of the implementation.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="font-semibold text-blue-800">Current Features:</p>
              <ul class="list-disc ml-5 mt-2 text-blue-700 text-sm">
                <li>User authentication with 11 demo accounts</li>
                <li>Demo account quick-switcher</li>
                <li>Local database with seeded data</li>
                <li>Role-based navigation (coming in Phase 2)</li>
              </ul>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="font-semibold text-green-800">Next Steps:</p>
              <ul class="list-disc ml-5 mt-2 text-green-700 text-sm">
                <li>Phase 2: Layout components and navigation</li>
                <li>Phase 3: RFQ management workflows</li>
                <li>Phase 4: Quotation submission and evaluation</li>
                <li>Phase 5: Polish and testing</li>
              </ul>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions class="p-4">
          <button mat-raised-button color="primary">
            <mat-icon>arrow_forward</mat-icon>
            Continue to Phase 2
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class DashboardComponent {
  currentUser: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
