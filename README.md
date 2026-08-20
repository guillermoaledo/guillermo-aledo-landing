# Portfolio de Guillermo Aledo

Portfolio profesional desarrollado con Angular para presentar mi perfil, experiencia, capacidades
técnicas, proyectos destacados y vías de contacto.

## Tecnologías

- Angular 22
- TypeScript
- SCSS
- Vitest y jsdom para pruebas unitarias

La aplicación utiliza componentes independientes (*standalone*) y estrategia de detección de
cambios `OnPush`.

## Requisitos

- Node.js `^22.22.3`, `^24.15.0` o `>=26.0.0`
- npm 11

Las versiones de Node.js anteriores, incluida la versión 20, no son compatibles con la versión de
Angular CLI utilizada por el proyecto.

## Instalación

Instala las dependencias respetando el archivo de bloqueo:

```bash
npm ci
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/` y se recargará cuando se modifique el
código fuente.

## Pruebas

Ejecuta las pruebas unitarias una sola vez:

```bash
npm test -- --watch=false
```

Las pruebas comprueban la creación del componente raíz, las secciones principales, la fecha de
inicio de la experiencia profesional y el renderizado de proyectos y enlaces de contacto.

## Build de producción

Genera una compilación optimizada:

```bash
npm run build
```

Los archivos generados se guardan en `dist/guillermo-aledo-landing/browser/`.

## Estructura principal

```text
public/                 Recursos públicos, incluido el favicon
src/
  app/                  Componentes y pruebas de la aplicación
  index.html            Metadatos, título y configuración del documento
  styles.scss           Estilos globales
```

## Características técnicas

- Diseño responsive sin librerías visuales externas.
- HTML semántico y asociaciones mediante `aria-labelledby`.
- Enlaces externos protegidos con `rel="noopener noreferrer"`.
- Preferencia `prefers-reduced-motion` respetada en las animaciones.
- Metadatos SEO, Open Graph y Twitter/X.
- Favicon SVG tipográfico servido desde `public/`.

## Despliegue

El repositorio no incluye actualmente una automatización de despliegue. El contenido generado en
`dist/guillermo-aledo-landing/browser/` puede publicarse en cualquier alojamiento de archivos
estáticos configurado para una aplicación Angular.
