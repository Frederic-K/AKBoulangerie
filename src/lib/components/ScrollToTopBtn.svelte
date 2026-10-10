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
		<!-- Icône Lucide « chevron-up » -->
		<svg
			class="size-5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="m18 15-6-6-6 6" />
		</svg>
	</button>
{/if}

<svelte:window bind:scrollY={y} />
