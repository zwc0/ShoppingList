import fs from 'fs/promises';
import { join } from "node:path";
import {fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv, Plugin, ResolvedConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { buildSync } from "esbuild";

function pluginPwaManifest(manifest: {}): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'my-plugin:build',
    apply: 'build',
    async configResolved(_config) {
      config = _config;
    },
    async writeBundle() {
      const filePath = path.resolve(config.root, config.build.outDir, 'manifest.json');
      await fs.writeFile(filePath, JSON.stringify(manifest));
    },
  };
}

function pluginPwaServiceWorker(): Plugin{
  return {
    name: 'my-plugin2:build',
    apply: "build",
    transformIndexHtml() {
      buildSync({
        minify: true,
        bundle: true,
        entryPoints: [join(process.cwd(), 'src', "sw.ts")],
        outfile: join(process.cwd(), "dist", "sw.js"),
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH,
    build: {
			rollupOptions: {
				// input: './src/app',
				output: {
					manualChunks: undefined,
					entryFileNames: 'app.js',
					assetFileNames: 'app.css',
				},
			},
		},
		plugins: [preact(), tailwindcss(),
      pluginPwaManifest({
        "background_color":"black",
        "description":"Shopping List",
        "display":"standalone",
        "icons":[
          {
            "src":"https://raw.githubusercontent.com/mdn/pwa-examples/master/a2hs/icon/fox-icon.png",
            "sizes":"192x192",
            "type":"image/png"
          }
        ],
        "name":"Shopping List",
        "short_name":"Shopping List",
        "start_url":"/ShoppingList/index.html"
      }),
      pluginPwaServiceWorker(),
    ],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			}
		}
  };
});
