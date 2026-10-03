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
			<div>
				<img src={heroBreadImage} alt="miches au levain sur plan fariné" />
			</div>
		</div>
	</Container>
</section>
