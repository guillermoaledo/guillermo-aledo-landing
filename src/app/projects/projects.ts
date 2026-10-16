import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  readonly index: string;
  readonly name: string;
  readonly description: string;
  readonly highlight: string;
  readonly technologies: readonly string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projects: readonly Project[] = [
    {
      index: '01',
      name: 'Nexo',
      description:
        'Aplicación de gestión para autónomos en España: clientes, movimientos, tareas, documentos y una visión unificada del negocio.',
      highlight: 'MVP en desarrollo, con foco en una experiencia sencilla, segura y mantenible.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
    },
  ];
}
