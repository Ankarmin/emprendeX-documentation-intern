// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs EmprendeX',
      logo: {
        light: './src/assets/Logo.png',
        dark: './src/assets/LogoBlanco.png',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      defaultLocale: 'root',
      locales: {
        root: { 
          label: 'Español', 
          lang: 'es' 
        },
      },
      components: {
        Sidebar: './src/components/Sidebar.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      head: [
        {
          tag: 'script',
          content: `
            (function() {
              // Función para aplicar la transición con clipPath
              const triggerTransition = (updateCallback) => {
                if (!document.startViewTransition) {
                  updateCallback();
                  return;
                }
                
                // Iniciar la transición de vista
                const transition = document.startViewTransition(() => {
                  updateCallback();
                });
                
                // Una vez que la transición está lista, animamos el pseudo-elemento
                transition.ready.then(() => {
                  const animation = document.documentElement.animate(
                    { 
                      clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] 
                    },
                    { 
                      pseudoElement: "::view-transition-new(root)",
                      duration: 600,
                      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      fill: 'both'
                    }
                  );
                }).catch(() => {
                  // Si falla, continuamos sin animación
                });
              };

              // Interceptar cambios de tema en Starlight
              const setupThemeTransition = () => {
                // Método 1: Interceptar el evento de click en los botones del selector de tema
                document.addEventListener('click', (e) => {
                  const themeBtn = e.target.closest('starlight-theme-select button');
                  if (!themeBtn) return;
                  
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Obtener el tema actual y el siguiente
                  const currentTheme = document.documentElement.getAttribute('data-theme');
                  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
                  
                  // Aplicar transición
                  triggerTransition(() => {
                    document.documentElement.setAttribute('data-theme', nextTheme);
                    localStorage.setItem('starlight-theme', nextTheme);
                  });
                }, true);

                // Método 2: Interceptar el select en móvil
                document.addEventListener('change', (e) => {
                  const themeSelect = e.target.closest('starlight-theme-select select');
                  if (!themeSelect) return;
                  
                  const newTheme = e.target.value;
                  if (!newTheme || newTheme === document.documentElement.getAttribute('data-theme')) return;
                  
                  e.preventDefault();
                  e.stopPropagation();
                  
                  triggerTransition(() => {
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('starlight-theme', newTheme);
                  });
                }, true);
              };

              // Inicializar cuando el DOM esté listo
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', setupThemeTransition);
              } else {
                setupThemeTransition();
              }
            })();
          `,
        },
      ],
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
            { label: 'Gestión de Sprints', link: '/scrum/' },
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

