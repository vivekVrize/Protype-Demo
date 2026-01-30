import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuditService } from '@core/services/audit.service';
import { AuditLog } from '@core/database/db';

@Component({
  selector: 'app-audit-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  logs = signal<AuditLog[]>([]);

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.auditService.getAuditLogs().subscribe(logs => this.logs.set(logs));
  }
}
