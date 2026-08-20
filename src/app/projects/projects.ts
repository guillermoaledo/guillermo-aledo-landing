import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  readonly index: string;
  readonly name: string;
  readonly description: string;
  readonly highlight: string;
  readonly technologies: readonly string[];
  readonly demoUrl: string;
  readonly repositoryUrl: string;
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
      name: 'Kanban Board',
      description:
        'Tablero inspirado en Jira para crear, editar, ordenar y mover tareas entre distintos estados.',
      highlight: 'Drag and drop, prioridades, etiquetas, fechas límite y persistencia local.',
      technologies: ['React 19', 'TypeScript', 'Vite', 'dnd-kit'],
      demoUrl: 'https://guillermoaledo.github.io/kanban-board/',
      repositoryUrl: 'https://github.com/guillermoaledo/kanban-board',
    },
    {
      index: '02',
      name: 'Trackly',
      description:
        'Aplicación web progresiva para crear hábitos, planificar su frecuencia y registrar el progreso diario.',
      highlight: 'Experiencia instalable, funcionamiento local y gestión accesible de hábitos.',
      technologies: ['Angular 22', 'TypeScript', 'PWA', 'Service Worker'],
      demoUrl: 'https://guillermoaledo.github.io/trackly/',
      repositoryUrl: 'https://github.com/guillermoaledo/trackly',
    },
    {
      index: '03',
      name: 'Lidia Liao',
      description:
        'Landing profesional para una fisioterapeuta y readaptadora deportiva, centrada en presentar sus servicios y experiencia.',
      highlight: 'Diseño responsive, componentes independientes y estructura accesible.',
      technologies: ['Angular 22', 'TypeScript', 'CSS', 'Responsive design'],
      demoUrl: 'https://guillermoaledo.github.io/lidia-liao-landing/',
      repositoryUrl: 'https://github.com/guillermoaledo/lidia-liao-landing',
    },
  ];
}
