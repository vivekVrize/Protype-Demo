import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <p class="text-xs uppercase tracking-[0.08em] text-slate-500">{{ label }}</p>
          <p class="text-3xl font-semibold text-slate-900">{{ value }}</p>
          <p class="text-xs text-slate-500" *ngIf="hint">{{ hint }}</p>
        </div>
        <div class="flex h-12 w-12 items-center justify-center rounded-xl" [ngClass]="iconBgClass">
          <mat-icon class="text-white" style="font-size: 26px; width: 26px; height: 26px;">{{ icon }}</mat-icon>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value: string | number = '';
  @Input() hint?: string;
  @Input() icon = 'insights';
  @Input() iconBgClass = 'bg-blue-600';
}
