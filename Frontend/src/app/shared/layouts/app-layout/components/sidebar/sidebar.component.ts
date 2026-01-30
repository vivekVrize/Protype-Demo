import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  path: string;
  roles: string[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Output() navigate = new EventEmitter<void>();

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'space_dashboard', path: '/dashboard', roles: ['admin', 'procurement_officer', 'approving_authority', 'witness', 'supplier'] },
    { label: 'RFQs', icon: 'assignment', path: '/rfqs', roles: ['admin', 'procurement_officer', 'approving_authority', 'witness'] },
    { label: 'Quotations', icon: 'description', path: '/quotations', roles: ['admin', 'supplier', 'procurement_officer', 'approving_authority'] },
    { label: 'Approvals', icon: 'verified', path: '/approvals', roles: ['approving_authority'] },
    { label: 'Audit Trail', icon: 'history', path: '/audit', roles: ['admin', 'procurement_officer', 'approving_authority'] },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  canAccess(item: NavItem): boolean {
    return this.authService.hasRole(item.roles);
  }

  onNavigate(): void {
    this.navigate.emit();
  }
}
