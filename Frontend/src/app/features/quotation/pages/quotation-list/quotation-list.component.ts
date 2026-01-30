import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuotationService } from '@core/services/quotation.service';
import { Quotation } from '@core/database/db';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-quotation-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, StatusBadgeComponent],
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  quotations = signal<Quotation[]>([]);

  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    this.quotationService.getQuotations().subscribe(q => this.quotations.set(q));
  }
}
