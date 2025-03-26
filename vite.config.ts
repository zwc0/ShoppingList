import fs from 'fs/promises';
import { join } from "node:path";
import {fileURLToPath, URL } from 'node:url';
import { defineConfig, type IndexHtmlTransformResult, loadEnv, type Plugin, type ResolvedConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { build, buildSync } from "esbuild";

function pluginPwaManifest(manifest: {}): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'my-plugin:build',
    // apply: 'build',
    async configResolved(_config) {
      config = _config;
    },
    async writeBundle() {
      const filePath = path.resolve(config.root, config.build.outDir, 'manifest.json');
      await fs.writeFile(filePath, JSON.stringify(manifest));
    },
    transformIndexHtml(html) {
      return [{
        injectTo: 'head',
        tag: 'link',
        attrs: {
          rel: 'manifest',
          href: path.resolve(config.base, 'manifest.json'),
        },
      }];
    }
  };
}

function pluginPwaServiceWorker(): Plugin{
  let config: ResolvedConfig;
  return {
    name: 'my-plugin2:build',
    // apply: "build",
    async configResolved(_config) {
      config = _config;
    },
    generateBundle(){

    },
    async transformIndexHtml() {
      await build({
        minify: true,
        bundle: true,
        entryPoints: [path.resolve(process.cwd(), 'src', "sw.ts")],
        outfile: path.resolve(config.build.outDir, "sw.js"),
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
