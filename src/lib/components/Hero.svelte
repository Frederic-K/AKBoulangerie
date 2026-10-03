<script>
	import Container from '$lib/components/Container.svelte';
	import heroBreadImage from '$lib/assets/hero-bread.webp';
</script>

<section class="bg-amber-800">
	<Container>
		<div class="grid grid-cols-2 gap-8 px-30 py-12">
			<div>
				<div class=" mb-4 font-sans text-xs font-bold tracking-widest text-bakery-accent uppercase">
					boulangerie artisanale - strasbourg
				</div>
				<div class=" font-serif text-8xl leading-[0.98] tracking-tight">
					<h1>
						Le pain du jour, <em class="block text-bakery-brown">façonné à la main.</em>
					</h1>
				</div>
			</div>
			<div class="h-175 w-140 overflow-hidden rounded-3xl">
				<img
					src={heroBreadImage}
					alt="miches au levain sur plan fariné"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
	</Container>
</section>
