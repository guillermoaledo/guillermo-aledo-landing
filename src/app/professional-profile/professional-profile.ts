import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.html',
  styleUrl: './professional-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProfileComponent {}
