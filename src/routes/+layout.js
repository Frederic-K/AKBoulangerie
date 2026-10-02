// Avec adapter-static, SvelteKit doit pouvoir pré-rendre toutes les routes
// Le +layout.js racine avec export const prerender = true
// est la manière la plus simple de le déclarer globalement pour ton site.
export const prerender = true;
