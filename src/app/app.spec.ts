import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the main portfolio sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const expectedSectionIds = [
      'perfil',
      'experiencia',
      'capacidades',
      'proyectos',
      'forma-de-trabajar',
      'contacto',
    ];

    expect(element.querySelector('main')).toBeTruthy();
    for (const id of expectedSectionIds) {
      expect(element.querySelector(`section#${id}`)).toBeTruthy();
    }
  });

  it('should present professional experience using its start date', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const experienceText = (fixture.nativeElement as HTMLElement)
      .querySelector('#experiencia')
      ?.textContent?.toLowerCase();

    expect(experienceText).toContain('desde julio de 2023');
  });

  it('should render every featured project with demo and repository links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const projects = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('#proyectos article'),
    );

    expect(projects).toHaveLength(3);
    for (const project of projects) {
      const links = project.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
      expect(links).toHaveLength(2);
      for (const link of links) {
        expect(link.href).toMatch(/^https:\/\//);
        expect(link.rel).toContain('noopener');
        expect(link.rel).toContain('noreferrer');
      }
    }
  });

  it('should render the configured contact links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const email = element.querySelector<HTMLAnchorElement>(
      'a[href="mailto:guillermo1439@gmail.com"]',
    );
    const linkedIn = element.querySelector<HTMLAnchorElement>(
      'a[href="https://www.linkedin.com/in/guillermo-aledo"]',
    );
    const github = element.querySelector<HTMLAnchorElement>(
      'a[href="https://github.com/guillermoaledo"]',
    );

    expect(email).toBeTruthy();
    expect(linkedIn?.rel).toContain('noopener');
    expect(github?.rel).toContain('noopener');
  });
});
