// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs EmprendeX',
      defaultLocale: 'root',
      locales: {
        root: { 
          label: 'Español', 
          lang: 'es' 
        },
      },
      components: {
        Sidebar: './src/components/Sidebar.astro',
      },
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'El Proyecto',
          items: [
            { label: 'Sobre EmprendeX', link: '/proyecto/sobre-emprendex/' },
            { label: 'Equipo', link: '/proyecto/equipo/' },
          ],
        },
        {
          label: 'Metodología Scrum',
          items: [
            { label: 'Product Backlog', link: '/scrum/product-backlog/' },
            { label: 'Ceremonias y Artefactos', link: '/scrum/ceremonias/' },
            { label: 'Definición de Hecho (DoD)', link: '/scrum/dod/' },
            {
              label: 'Sprints',
              items: [{ autogenerate: { directory: 'scrum/sprints' } }],
            },
          ],
        },
        {
          label: 'Documentación Técnica',
          items: [
            { label: 'Arquitectura General', link: '/arquitectura/overview/' },
            {
              label: 'Frontend (App Móvil)',
              items: [
                { label: 'Navegación (Expo Router)', link: '/arquitectura/frontend/navegacion/' },
                { label: 'Gestión de Estado', link: '/arquitectura/frontend/estado/' },
                { label: 'Componentes UI', link: '/arquitectura/frontend/componentes/' },
              ],
            },
            {
              label: 'Backend',
              items: [
                { label: 'Estructura de la API', link: '/arquitectura/backend/api/' },
                { label: 'Base de Datos', link: '/arquitectura/backend/base-de-datos/' },
              ],
            },
          ],
        },
        {
          label: 'Guías del Equipo',
          items: [
            { label: 'Flujo de Trabajo con Git', link: '/guias/git/' },
            { label: 'Entorno de Desarrollo', link: '/guias/entorno/' },
          ],
        },
      ],
    }),
  ],
});

