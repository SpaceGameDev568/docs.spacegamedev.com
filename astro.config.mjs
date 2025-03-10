// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'SpaceGameDev Docs',
          social: {
              github: 'https://github.com/SpaceGameDev568/docs.spacegamedev.com',
              email: 'mailto:support@spacegamedev.com',
          },
          logo: {
            light: './src/assets/light-logo.png',
            dark: './src/assets/dark-logo.png',
            replacesTitle: true,
          },
          sidebar: [
              {
                  label: 'Modding',
                  autogenerate: { directory: 'modding' },
              },
              {
                label: 'Main Site',
                link: 'https://spacegamedev.com',
                badge: 'External'
              },
          ],
          customCss: [
              // Path to your Tailwind base styles:
              './src/styles/global.css',
          ],
        editLink: {
          baseUrl: 'https://github.com/SpaceGameDev568/docs.spacegamedev.com/edit/master/',
        },
        lastUpdated: true,
        credits: true,
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});