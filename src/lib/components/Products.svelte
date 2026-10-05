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

<section id="produits" class="px-5 pb-34 lg:px-30">
	<Container>
		<div class="mb-14 flex items-end justify-between gap-10">
			<div>
				<div
					class="mb-4.5 text-[13px] font-semibold tracking-[0.14em] text-bakery-accent uppercase"
				>
					nos incontournables
				</div>
				<h2 class="font-serif text-6xl leading-[1.02] tracking-[-0.015em]">
					Ce qui sort du four, <br />chaque jour.
				</h2>
			</div>
			<div class="flex gap-2">
				{#each categories as category (category)}
					{@const isActive = categoryFilter === category}
					<button
						type="button"
						aria-pressed={isActive}
						onclick={() => (categoryFilter = category)}
						class={[
							'rounded-full border px-5.5 py-2.75 text-sm font-semibold',
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
		<div class="grid grid-cols-3 gap-x-8 gap-y-14">
			{#each filteredProducts as product (product.name)}
				<ProductCard {product} />
			{/each}
		</div>
	</Container>
</section>
