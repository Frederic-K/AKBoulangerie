<script>
	let { product } = $props();
</script>

<article class="overflow-hidden">
	<img
		src={product.image}
		alt={product.alt}
		class="mb-5.5 aspect-4/3 w-full rounded-2xl object-cover"
	/>
	<span class="mb-2 text-xs font-medium tracking-[0.12em] text-bakery-accent uppercase"
		>{product.category}</span
	>
	<h3 class="mb-2 font-serif text-3xl font-normal text-bakery-brown">{product.name}</h3>
	<p class="text-sm leading-[1.6] text-bakery-muted">{product.description}</p>
</article>
