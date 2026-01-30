import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RFQService } from '@core/services/rfq.service';
import { AuditService } from '@core/services/audit.service';
import { RFQ } from '@core/database/db';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, StatusBadgeComponent],
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {
  pending = signal<RFQ[]>([]);

  constructor(private rfqService: RFQService, private auditService: AuditService) {}

  ngOnInit(): void {
    this.rfqService.getRFQsByStatus('draft').subscribe(r => this.pending.set(r));
  }

  approve(rfq: RFQ): void {
    if (!rfq.id) return;
    this.rfqService.updateRFQ(rfq.id, { status: 'published', approvalStatus: 'approved' }).subscribe(() => {
      this.auditService.logAction('approve_rfq', 'rfq', rfq.id!, `Approved ${rfq.rfqNumber}`).subscribe();
      this.ngOnInit();
    });
  }

  reject(rfq: RFQ): void {
    if (!rfq.id) return;
    this.rfqService.updateRFQ(rfq.id, { approvalStatus: 'rejected' }).subscribe(() => {
      this.auditService.logAction('reject_rfq', 'rfq', rfq.id!, `Rejected ${rfq.rfqNumber}`).subscribe();
      this.ngOnInit();
    });
  }
}
