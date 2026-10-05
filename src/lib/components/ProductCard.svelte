<script>
	let { product } = $props();
</script>

<article>
	<img
		src={product.image}
		alt={product.alt}
		loading="lazy"
		class="mb-5.5 aspect-4/3 w-full rounded-[20px] object-cover"
	/>
	<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-bakery-accent uppercase">
		{product.category}
	</p>
	<h3 class="mb-2 font-serif text-3xl leading-[1.1] text-bakery-dark">{product.name}</h3>
	<p class="max-w-85 text-[15px] leading-[1.6] text-bakery-muted">{product.description}</p>
</article>
