import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/database/db';
import { AuditService } from '@core/services/audit.service';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule, LoadingSpinnerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  currentUser = signal<User | null>(null);
  switching = signal(false);
  demoUsers: Pick<User, 'username' | 'role' | 'name'>[] = [
    { username: 'procurement1', role: 'procurement_officer', name: 'Sarah Tan' },
    { username: 'approver1', role: 'approving_authority', name: 'David Lim' },
    { username: 'witness1', role: 'witness', name: 'Emily Wong' },
    { username: 'supplier1', role: 'supplier', name: 'John Chen' }
  ];

  constructor(private authService: AuthService, private auditService: AuditService) {
    this.authService.currentUser$.subscribe(user => this.currentUser.set(user));
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  switchUser(username: string): void {
    const fromUser = this.currentUser();
    this.switching.set(true);
    this.authService.switchUser(username).subscribe(success => {
      this.switching.set(false);
      const toUser = this.currentUser();
      if (success && toUser?.id) {
        this.auditService.logAction(
          'switch_user',
          'user',
          toUser.id,
          `Switched from ${fromUser?.username || 'unknown'} to ${toUser.username}`
        ).subscribe();
      }
    });
  }

  iconFor(role: string): string {
    switch (role) {
      case 'procurement_officer':
        return 'badge';
      case 'approving_authority':
        return 'verified_user';
      case 'witness':
        return 'visibility';
      case 'supplier':
        return 'store';
      default:
        return 'person';
    }
  }

  logout(): void {
    this.auditService.logAction('logout', 'user', this.currentUser()?.id || 0, 'User logged out').subscribe();
    this.authService.logout();
  }
}
