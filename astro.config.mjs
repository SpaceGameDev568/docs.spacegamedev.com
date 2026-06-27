// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'SpaceGameDev Docs',
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/SpaceGameDev568/docs.spacegamedev.com' },
              { icon: 'discord', label: 'Discord', href: 'https://discord.gg/tgNjem4bjU' }
          ],
          logo: {
            light: './public/favicon.svg',
            dark: './public/favicon.svg',
            replacesTitle: true,
          },
          sidebar: [
            {
              label: 'Modding',
              items: [{ autogenerate: { "directory": "modding" } }]
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
          baseUrl: 'https://github.com/SpaceGameDev568/docs.spacegamedev.com/blob/master/',
        },
        lastUpdated: true,
        credits: true,
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});