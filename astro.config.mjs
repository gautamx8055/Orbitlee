// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const skip = [
	'/lab/',
	'/404',
	'/services/marketing-advertising',
	'/services/web-app-development',
	'/sitemap',
];

// https://astro.build/config
export default defineConfig({
	site: 'https://www.orbitlee.com',
	trailingSlash: 'ignore',
	adapter: vercel(),
	integrations: [
		sitemap({
			filter: (page) => !skip.some((path) => page.includes(path)),
			serialize(item) {
				const url = item.url.endsWith('/') || item.url.match(/\.[a-z0-9]+$/i) ? item.url : `${item.url}/`;
				return { ...item, url };
			},
		}),
	],
});
