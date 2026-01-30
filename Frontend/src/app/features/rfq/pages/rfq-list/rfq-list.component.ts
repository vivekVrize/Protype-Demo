import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RFQService } from '@core/services/rfq.service';
import { RFQ } from '@core/database/db';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-rfq-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, StatusBadgeComponent],
  templateUrl: './rfq-list.component.html',
  styleUrls: ['./rfq-list.component.css']
})
export class RfqListComponent implements OnInit {
  rfqs = signal<RFQ[]>([]);

  constructor(private rfqService: RFQService) {}

  ngOnInit(): void {
    this.rfqService.getRFQs().subscribe(r => this.rfqs.set(r));
  }
}
