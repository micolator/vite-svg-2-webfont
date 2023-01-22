import { resolve } from 'path';
import { defineConfig } from 'vite';
import { iconPlugin } from 'vite-svg-2-webfont';

const webfontFolder = resolve('./src/webfont');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        iconPlugin({
            files: ['*.svg'],
            context: webfontFolder,
            dest: resolve(webfontFolder, 'artifacts'),
            htmlDest: resolve(webfontFolder, 'icons.ts'),
            htmlTemplate: resolve(webfontFolder, 'icons.ts.hbs'),
            fontName: 'exampleIcon',
            baseSelector: '.exIcon',
            html: true,
            writeFiles: true,
        }),
    ],
});