import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact';
import { ExperienceComponent } from './experience/experience';
import { HeroComponent } from './hero/hero';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile';
import { TechnicalCapabilitiesComponent } from './technical-capabilities/technical-capabilities';
import { WorkingApproachComponent } from './working-approach/working-approach';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    ProfessionalProfileComponent,
    ExperienceComponent,
    TechnicalCapabilitiesComponent,
    WorkingApproachComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
