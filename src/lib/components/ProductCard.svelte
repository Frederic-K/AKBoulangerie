<script>
	let { product } = $props();
</script>

<article>
	<img
		src={product.image}
		alt={product.alt}
		loading="lazy"
		class="mb-4.5 aspect-4/3 w-full rounded-[18px] object-cover lg:mb-5.5 lg:rounded-[20px]"
	/>
	<p class="mb-1.5 text-xs font-semibold tracking-[0.12em] text-bakery-accent uppercase lg:mb-2">
		{product.category}
	</p>
	<h3 class="mb-1.5 font-serif text-[27px] leading-[1.1] text-bakery-dark lg:mb-2 lg:text-3xl">
		{product.name}
	</h3>
	<p class="max-w-85 text-[15px] leading-[1.6] text-bakery-muted">{product.description}</p>
</article>
