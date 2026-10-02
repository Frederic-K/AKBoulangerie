<script>
	let showScrollTopBtn = $state(true);

	let navLinks = [
		{ href: '#accueil', label: 'Accueil' },
		{ href: '#produits', label: 'Produits' },
		{ href: '#savoir-faire', label: 'Savoir-faire' },
		{ href: '#horaires', label: 'Horaires' }
	];

	function handleScrollToTop() {
		showScrollTopBtn = window.scrollY > 400;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header>
	<div class="flex items-center justify-between gap-4 p-4">
		<a href="/" class="flex items-center gap-3 font-serif">
			<div
				class="flex size-11 items-center justify-center rounded-full border-[1.5px] border-bakery-dark text-[22px] leading-none tracking-tighter text-bakery-dark"
			>
				<span>A</span><span class="text-bakery-accent italic">K</span>
			</div>
			<span class=" text-[26px] text-bakery-dark">A K Boulangerie</span>
		</a>
		<nav class="flex gap-4">
			{#each navLinks as { href, label } (href)}
				<a {href} class="text-bakery-dark hover:text-bakery-accent-soft">{label}</a>
			{/each}
		</nav>
		<a
			href="#nous-trouver"
			class="rounded-full border border-bakery-dark px-4 py-2 text-bakery-dark hover:bg-bakery-muted hover:text-bakery-accent-soft"
		>
			Nous trouver
		</a>
	</div>
</header>

{#if showScrollTopBtn}
	<button
		type="button"
		aria-label="Scroll to top"
		class="fixed right-4 bottom-4 rounded-full border border-bakery-dark px-2 py-2 text-bakery-dark hover:bg-bakery-muted hover:text-bakery-accent-soft"
		onclick={scrollToTop}
	>
		<svg
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="1.8"
			class="h-5 w-5"
			aria-hidden="true"
		>
			<path d="m5 12.5 5-5 5 5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
{/if}

<svelte:window onscroll={handleScrollToTop} />
