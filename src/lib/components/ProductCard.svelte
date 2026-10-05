<script>
	let { product } = $props();
</script>

<article>
	<img src={product.image} alt={product.alt} class="aspect-4/3 w-full rounded-3xl object-cover" />
</article>
