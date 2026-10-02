<script>
	import { resolve } from '$app/paths';
	import Container from '$lib/components/Container.svelte';
	let navLinks = [
		{ href: '#accueil', label: 'Accueil' },
		{ href: '#produits', label: 'Produits' },
		{ href: '#savoir-faire', label: 'Savoir-faire' },
		{ href: '#horaires', label: 'Horaires' }
	];
	let activeNavLink = $state('');
</script>

<header class="bg-bakery-cream">
	<Container>
		<div class="flex items-center justify-between gap-4 p-4">
			<a href={resolve('/')} class="flex items-center gap-3 font-serif">
				<div
					class="flex size-11 items-center justify-center rounded-full border-[1.5px] border-bakery-dark text-[22px] leading-none tracking-tighter text-bakery-dark"
				>
					<span>A</span><span class="text-bakery-accent italic">K</span>
				</div>
				<span class=" text-[26px] text-bakery-dark">A K Boulangerie</span>
			</a>
			<nav class="relative grid grid-cols-4 gap-2 px-2">
				{#each navLinks as { href, label } (href)}
					<a
						{href}
						class="text-center text-bakery-dark hover:text-bakery-accent-soft"
						onclick={() => (activeNavLink = href)}>{label}</a
					>
				{/each}
				<div
					class="absolute bottom-0 left-0 h-px w-1/4 bg-bakery-muted transition-transform duration-200"
					class:translate-x-0={activeNavLink === '#accueil'}
					class:translate-x-full={activeNavLink === '#produits'}
					class:translate-x-[200%]={activeNavLink === '#savoir-faire'}
					class:translate-x-[300%]={activeNavLink === '#horaires'}
				></div>
				<!-- <div
					class="absolute top-1 bottom-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-lg bg-white shadow-sm transition-transform duration-200"
					class:translate-x-0={activeNavLink === '#accueil'}
					class:translate-x-full={activeNavLink === '#produits'}
					class:translate-x-[200%]={activeNavLink === '#savoir-faire'}
					class:translate-x-[300%]={activeNavLink === '#horaires'}
					aria-hidden="true"
				></div> -->
			</nav>
			<a
				href="#nous-trouver"
				class="rounded-full border border-bakery-dark px-4 py-2 text-bakery-dark hover:bg-bakery-muted hover:text-bakery-accent-soft"
			>
				Nous trouver
			</a>
		</div>
	</Container>
</header>
