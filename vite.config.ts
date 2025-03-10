import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json' with { type: 'json' };
import sveltePackage from './node_modules/svelte/package.json' with { type: 'json' };
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' with { type: 'json' };
import vitePackage from './node_modules/vite/package.json' with { type: 'json' };
import svelterunehighlightPackage from './node_modules/svelte-rune-highlight/package.json' with { type: 'json' };
import flowbiteSveltePackage from './node_modules/flowbite-svelte/package.json' with { type: 'json' };
import runesmetatagsPackage from './node_modules/runes-meta-tags/package.json' with { type: 'json' };
import runaticsPackage from './node_modules/runatics/package.json' with { type: 'json' };

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	define: {
		__NAME__: JSON.stringify(pkg.name),
		__DESCRIPTION__: JSON.stringify(pkg.description),
		__VERSION__: JSON.stringify(pkg.version),
		__GITHUBURL__: JSON.stringify(pkg.repository.url),
		__RUNATICS_VERSION__: JSON.stringify(runaticsPackage.version),
		__RUNES_METATAGS_VERSION__: JSON.stringify(runesmetatagsPackage.version),
		__SVELTE_VERSION__: JSON.stringify(sveltePackage.version),
		__SVELTEKIT_VERSION__: JSON.stringify(svelteKitPackage.version),
		__SVELTE_RUNE_HIGHLIGHT_VERSION__: JSON.stringify(svelterunehighlightPackage.version),
		__FLOWBITE_SVELTE_VERSION__: JSON.stringify(flowbiteSveltePackage.version),
		__VITE_VERSION__: JSON.stringify(vitePackage.version)
	}
});
