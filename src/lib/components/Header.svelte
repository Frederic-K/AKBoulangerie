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

<header class="px-5 py-4.5 md:px-10 lg:py-7 xl:px-30">
	<Container>
		<div class="flex items-center justify-between gap-4">
			<a href={resolve('/')} class="flex items-center gap-2.5 font-serif lg:gap-3">
				<div
					class="flex size-10 items-center justify-center rounded-full border-[1.5px] border-bakery-dark text-xl leading-none tracking-tighter text-bakery-dark lg:size-11 lg:text-[22px]"
				>
					<span>A</span><span class="text-bakery-accent italic">K</span>
				</div>
				<span class="text-[21px] text-bakery-dark lg:text-[26px]">A K Boulangerie</span>
			</a>
			<nav class="relative hidden grid-cols-4 lg:grid">
				{#each navLinks as { href, label } (href)}
					<a
						{href}
						class="z-10 px-3 py-2 text-center text-bakery-dark hover:text-bakery-accent-soft"
						onclick={() => (activeNavLink = href)}>{label}</a
					>
				{/each}
				<div
					class="absolute bottom-0 left-0 h-px w-1/4 bg-bakery-muted transition-transform duration-200"
					class:translate-x-0={activeNavLink === '#accueil'}
					class:translate-x-full={activeNavLink === '#produits'}
					class:translate-x-[200%]={activeNavLink === '#savoir-faire'}
					class:translate-x-[300%]={activeNavLink === '#horaires'}
					aria-hidden="true"
				></div>
			</nav>
			<a
				href="#nous-trouver"
				class="shrink-0 rounded-full border border-bakery-dark px-3.5 py-3 text-[13px] font-semibold text-bakery-dark hover:bg-bakery-dark hover:text-bakery-sand lg:px-5.5 lg:py-2.5 lg:text-sm"
			>
				Nous trouver
			</a>
		</div>
	</Container>
</header>
