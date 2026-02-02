import { Component, Inject, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/database/db';
import { RFQService } from '@core/services/rfq.service';
import { QuotationService } from '@core/services/quotation.service';
import { Subscription, combineLatest } from 'rxjs';
import { StatCardComponent } from '@shared/components/stat-card/stat-card.component';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StatCardComponent,
    StatusBadgeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser = signal<User | null>(null);
  metrics = signal({
    activeRfqs: 0,
    pendingApprovals: 0,
    openQuotations: 0,
    closingSoon: 0,
    supplierOpen: 0,
    supplierSubmitted: 0
  });
  rfqs: any[] = [];
  recentRfqs: any[] = [];
  private sub?: Subscription;


  constructor(
    private authService: AuthService,
    private rfqService: RFQService,
    private quotationService: QuotationService
  ) {}

  ngOnInit(): void {
    this.sub = combineLatest([
      this.authService.currentUser$,
      this.rfqService.rfqs$,
      this.quotationService.quotations$
    ]).subscribe(([user, rfqs, quotations]) => {
      this.currentUser.set(user);
      this.rfqs = rfqs;
      this.recentRfqs = rfqs.slice(0, 4);
      const now = new Date();
      const closingSoon = rfqs.filter(r => r.closeDate && (r.closeDate as any) > now && (r.closeDate as any) < new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)).length;
      const active = rfqs.filter(r => r.status === 'published').length;
      const pending = rfqs.filter(r => r.approvalStatus === 'pending').length;
      const openQuotes = quotations.filter(q => q.status === 'submitted').length;
      const supplierOpen = rfqs.filter(r => r.status === 'published').length;
      const supplierSubmitted = quotations.filter(q => q.supplierId === user?.id).length;

      this.metrics.set({
        activeRfqs: active,
        pendingApprovals: pending,
        openQuotations: openQuotes,
        closingSoon,
        supplierOpen,
        supplierSubmitted
      });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  isSupplier(): boolean {
    return this.currentUser()?.role === 'supplier';
  }
}
