<script>
	let y = $state(0);
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if y > 400}
	<button
		type="button"
		aria-label="Retour en haut"
		class="fixed right-4 bottom-4 rounded-full border border-bakery-dark bg-bakery-cream px-2 py-2 text-bakery-dark hover:bg-bakery-sand"
		onclick={scrollToTop}
	>
		<svg
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="1.8"
			class="size-5"
			aria-hidden="true"
		>
			<path d="m5 12.5 5-5 5 5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
{/if}

<svelte:window bind:scrollY={y} />
