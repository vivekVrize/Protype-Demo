import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div class="flex items-center justify-center" [ngClass]="containerClass">
      <mat-progress-spinner
        [diameter]="diameter"
        [strokeWidth]="strokeWidth"
        [color]="color"
        mode="indeterminate">
      </mat-progress-spinner>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {
  @Input() diameter = 32;
  @Input() strokeWidth = 4;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() containerClass = '';
}
