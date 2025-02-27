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
          },
          sidebar: [
              {
                  label: 'Modding',
                  autogenerate: { directory: 'modding' },
              },
          ],
          customCss: [
              // Path to your Tailwind base styles:
              './src/styles/global.css',
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});