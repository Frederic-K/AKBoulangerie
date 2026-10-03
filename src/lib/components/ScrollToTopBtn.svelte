<script>
	let showScrollTopBtn = $state(true);

	function handleScrollToTop() {
		showScrollTopBtn = window.scrollY > 400;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if showScrollTopBtn}
	<button
		type="button"
		aria-label="Retour en haut"
		class="fixed right-4 bottom-4 rounded-full border border-bakery-dark px-2 py-2 text-bakery-dark hover:bg-bakery-muted/50"
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
