import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-working-approach',
  templateUrl: './working-approach.html',
  styleUrl: './working-approach.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkingApproachComponent {}
