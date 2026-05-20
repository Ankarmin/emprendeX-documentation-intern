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
          lang: 'es',
        },
      },
      components: {
        Sidebar: './src/components/Sidebar.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
            sizes: '48x48',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-32x32.png',
            sizes: '32x32',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-16x16.png',
            sizes: '16x16',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
        {
          tag: 'script',
          content: `
            (function() {
              const storageKey = 'starlight-theme';
              const systemThemeQuery = window.matchMedia('(prefers-color-scheme: light)');

              const parseThemePreference = (theme) => {
                return theme === 'dark' || theme === 'light' || theme === 'auto' ? theme : 'auto';
              };

              const loadStoredThemePreference = () => {
                return parseThemePreference(typeof localStorage !== 'undefined' && localStorage.getItem(storageKey));
              };

              const storeThemePreference = (theme) => {
                if (typeof localStorage === 'undefined') return;
                localStorage.setItem(storageKey, theme === 'light' || theme === 'dark' ? theme : '');
              };

              const getSystemTheme = () => {
                return systemThemeQuery.matches ? 'light' : 'dark';
              };

              const getEffectiveTheme = (themePreference) => {
                return themePreference === 'auto' ? getSystemTheme() : themePreference;
              };

              const getClipPathFrames = (fromTheme, toTheme) => {
                if (fromTheme === 'dark' && toTheme === 'light') {
                  return ["inset(100% 0 0 0)", "inset(0 0 0 0)"];
                }

                return ["inset(0 0 100% 0)", "inset(0 0 0 0)"];
              };

              const triggerTransition = (fromTheme, toTheme, updateCallback) => {
                if (fromTheme === toTheme || !document.startViewTransition) {
                  updateCallback();
                  return;
                }

                const transition = document.startViewTransition(() => {
                  updateCallback();
                });

                transition.ready.then(() => {
                  document.documentElement.animate(
                    {
                      clipPath: getClipPathFrames(fromTheme, toTheme)
                    },
                    {
                      pseudoElement: "::view-transition-new(root)",
                      duration: 600,
                      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      fill: 'both'
                    }
                  );
                }).catch(() => {
                  // Si falla, continuamos sin animacion
                });
              };

              const syncThemePreference = (themePreference) => {
                const normalizedTheme = parseThemePreference(themePreference);
                const effectiveTheme = getEffectiveTheme(normalizedTheme);

                window.StarlightThemeProvider?.updatePickers(normalizedTheme);
                document.documentElement.setAttribute('data-theme', effectiveTheme);
                storeThemePreference(normalizedTheme);
              };

              const applyThemePreference = (themePreference) => {
                const normalizedTheme = parseThemePreference(themePreference);
                const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
                const nextTheme = getEffectiveTheme(normalizedTheme);

                triggerTransition(currentTheme, nextTheme, () => {
                  syncThemePreference(normalizedTheme);
                });
              };

              const setupThemeTransition = () => {
                document.addEventListener('change', (e) => {
                  const themeSelect = e.target.closest('starlight-theme-select select');
                  if (!themeSelect) return;

                  e.preventDefault();
                  e.stopPropagation();

                  applyThemePreference(themeSelect.value);
                }, true);

                systemThemeQuery.addEventListener('change', () => {
                  if (loadStoredThemePreference() !== 'auto') return;
                  applyThemePreference('auto');
                });
              };

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
              label: 'Frontend',
              items: [
                { label: 'Navegación (Expo Router)', link: '/arquitectura/frontend/navegacion/' },
                { label: 'Gestión de Estado', link: '/arquitectura/frontend/estado/' },
                { label: 'Componentes UI', link: '/arquitectura/frontend/componentes/' },
                { label: 'Vistas', link: '/arquitectura/frontend/vistas/' },
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
          label: 'SCM',
          items: [
            { label: 'Gestión de Configuración', link: '/scm/' },
            { label: 'Trazabilidad con GitHub', link: '/scm/trazabilidad/' },
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
