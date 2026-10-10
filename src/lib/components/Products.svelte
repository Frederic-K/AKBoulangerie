<script>
	import { products } from '$lib/data/products.js';
	import Container from '$lib/components/Container.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let categoryFilter = $state('Tous');
	const categories = ['Tous', ...new Set(products.map((product) => product.category))];

	let filteredProducts = $derived.by(() => {
		if (categoryFilter === 'Tous') {
			return products;
		}
		return products.filter((product) => product.category === categoryFilter);
	});
</script>

<section id="produits" class="px-5 pb-20 md:px-10 lg:pb-34 xl:px-30">
	<Container>
		<div
			class="mb-8 flex flex-col gap-6 lg:mb-14 xl:flex-row xl:items-end xl:justify-between xl:gap-10"
		>
			<div>
				<div
					class="mb-3.5 text-[12px] font-semibold tracking-[0.14em] text-bakery-accent uppercase lg:mb-4.5 lg:text-[13px]"
				>
					nos incontournables
				</div>
				<h2
					class="font-serif text-[38px] leading-[1.05] tracking-[-0.015em] lg:text-6xl lg:leading-[1.02]"
				>
					Ce qui sort du four, <br class="max-lg:hidden" />chaque jour.
				</h2>
			</div>
			<div class="flex flex-wrap gap-2">
				{#each categories as category (category)}
					{@const isActive = categoryFilter === category}
					<button
						type="button"
						aria-pressed={isActive}
						onclick={() => (categoryFilter = category)}
						class={[
							'rounded-full border px-4 py-2.75 text-sm font-semibold lg:px-5.5',
							isActive
								? 'border-bakery-dark bg-bakery-dark text-bakery-cream'
								: 'border-bakery-muted/50 text-bakery-brown hover:border-bakery-dark'
						]}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3">
			{#each filteredProducts as product (product.name)}
				<ProductCard {product} />
			{/each}
		</div>
	</Container>
</section>
