<script>
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import Container from '$lib/components/Container.svelte';
	let navLinks = [
		{ href: '#accueil', label: 'Accueil' },
		{ href: '#produits', label: 'Produits' },
		{ href: '#savoir-faire', label: 'Savoir-faire' },
		{ href: '#horaires', label: 'Horaires' }
	];
	let activeNavLink = $state('');
	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="relative px-5 py-4.5 md:px-10 lg:py-7 xl:px-30">
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
			<nav aria-label="Navigation principale" class="relative hidden grid-cols-4 lg:grid">
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
			<div class="flex items-center gap-2">
				<a
					href="#nous-trouver"
					class="shrink-0 rounded-full border border-bakery-dark px-5.5 py-2.5 text-sm font-semibold text-bakery-dark hover:bg-bakery-dark hover:text-bakery-sand max-lg:hidden"
				>
					Nous trouver
				</a>
				<button
					type="button"
					class="flex size-11 items-center justify-center rounded-full border border-bakery-dark text-bakery-dark lg:hidden"
					aria-expanded={menuOpen}
					aria-controls="menu-mobile"
					aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
					onclick={() => (menuOpen = !menuOpen)}
				>
					<!-- {#if menuOpen} -->
					<!-- Icône Lucide « x » -->
					<!-- <svg
							class="size-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg> -->
					<!-- {:else} -->
					<!-- Icône Lucide « menu » -->
					<!-- <svg
							class="size-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M4 5h16" />
							<path d="M4 12h16" />
							<path d="M4 19h16" />
						</svg> -->
					<!-- {/if} -->

					<span aria-hidden="true" class="flex h-3.5 w-5 flex-col justify-between">
						<span
							class={[
								'h-0.5 rounded-full bg-current transition duration-200 motion-reduce:transition-none',
								menuOpen && 'translate-y-1.5 rotate-45'
							]}
						></span>
						<span
							class={[
								'h-0.5 rounded-full bg-current transition duration-200 motion-reduce:transition-none',
								menuOpen && 'opacity-0'
							]}
						></span>
						<span
							class={[
								'h-0.5 rounded-full bg-current transition duration-200 motion-reduce:transition-none',
								menuOpen && '-translate-y-1.5 -rotate-45'
							]}
						></span>
					</span>
				</button>
			</div>
		</div>
	</Container>

	{#if menuOpen}
		<div
			id="menu-mobile"
			class="absolute inset-x-0 top-full z-40 bg-bakery-cream px-5 pb-6 shadow-lg md:px-10 lg:hidden"
			transition:slide={{ duration: prefersReducedMotion.current ? 0 : 200 }}
		>
			<nav aria-label="Navigation mobile">
				<ul>
					{#each navLinks as { href, label } (href)}
						<li class="border-b border-bakery-line-soft/50">
							<a
								{href}
								class="block py-3.5 text-lg font-medium text-bakery-dark hover:text-bakery-accent"
								onclick={closeMenu}>{label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
			<a
				href="#nous-trouver"
				class="mt-6 block rounded-full bg-bakery-dark py-3.75 text-center text-[15px] font-semibold text-bakery-cream"
				onclick={closeMenu}
			>
				Nous trouver
			</a>
		</div>
	{/if}
</header>
