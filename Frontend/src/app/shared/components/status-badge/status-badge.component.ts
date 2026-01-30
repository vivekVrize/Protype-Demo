import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const STATUS_STYLES: Record<string, string> = {
  draft: 'bg-slate-100 text-slate-700 ring-slate-200',
  pending: 'bg-amber-100 text-amber-800 ring-amber-200',
  approved: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  published: 'bg-blue-100 text-blue-700 ring-blue-200',
  closed: 'bg-slate-200 text-slate-800 ring-slate-300',
  evaluated: 'bg-indigo-100 text-indigo-700 ring-indigo-200',
  awarded: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  rejected: 'bg-red-100 text-red-700 ring-red-200',
  submitted: 'bg-blue-50 text-blue-700 ring-blue-100',
  opened: 'bg-violet-50 text-violet-700 ring-violet-100'
};

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ring-1 ring-inset"
      [ngClass]="STATUS_STYLES[status] || 'bg-gray-100 text-gray-700 ring-gray-200'"
    >
      {{ label || status | titlecase }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBadgeComponent {
  @Input() status: string = '';
  @Input() label?: string;

  protected readonly STATUS_STYLES = STATUS_STYLES;
}
