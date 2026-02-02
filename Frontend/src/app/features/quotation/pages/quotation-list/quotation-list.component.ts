import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuotationService } from '@core/services/quotation.service';
import { Quotation } from '@core/database/db';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';
import { RFQService } from '@core/services/rfq.service';

@Component({
  selector: 'app-quotation-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, StatusBadgeComponent],
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationListComponent implements OnInit, OnDestroy {
  quotations = signal<Quotation[]>([]);
  private rfqCloseTimes = signal<Record<number, number>>({});
  private currentTime = signal(Date.now());
  private readonly quotationService = inject(QuotationService);
  private readonly rfqService = inject(RFQService);
  private timeTickerId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.quotationService.getQuotations().subscribe(q => this.quotations.set(q));
    this.rfqService.getRFQs().subscribe(rfqs => {
      const map: Record<number, number> = {};
      rfqs.forEach(rfq => {
        if (rfq.id !== undefined && rfq.closeDate) {
          const closeDate = new Date(rfq.closeDate);
          if (!Number.isNaN(closeDate.getTime())) {
            map[rfq.id] = closeDate.getTime();
          }
        }
      });
      this.rfqCloseTimes.set(map);
    });
    this.startCurrentTimeTicker();
  }

  ngOnDestroy(): void {
    if (this.timeTickerId) {
      clearInterval(this.timeTickerId);
    }
  }

  shouldBlurAmount(rfqId: number): boolean {
    const closeTime = this.rfqCloseTimes()[rfqId];
    if (!closeTime) {
      return true;
    }
    return this.currentTime() < closeTime;
  }

  private startCurrentTimeTicker(): void {
    this.currentTime.set(Date.now());
    this.timeTickerId = setInterval(() => {
      this.currentTime.set(Date.now());
    }, 60_000);
  }
}
