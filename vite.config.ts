import {fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH,
		plugins: [preact(), tailwindcss(),
      VitePWA({
        manifestFilename: 'manifest.json',
        registerType: 'prompt',
        injectRegister: false,

        pwaAssets: {
          disabled: false,
          config: true,
        },

        manifest: {
          display: 'standalone',
          name: 'Shopping List',
          short_name: 'Shopping List',
          description: 'Shopping List',
          theme_color: '#ffffff',
          icons: [
            {
              "src":"https://raw.githubusercontent.com/mdn/pwa-examples/master/a2hs/icon/fox-icon.png",
              "sizes":"192x192",
              "type":"image/png"
            }
          ]
        },

        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },

        devOptions: {
          enabled: false,
          navigateFallback: 'index.html',
          suppressWarnings: true,
          type: 'module',
        },
       })
    ],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			}
		}
  };
});
