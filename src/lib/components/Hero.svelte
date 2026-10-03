<script>
	import Container from '$lib/components/Container.svelte';
	import heroBreadImage from '$lib/assets/hero-bread.webp';
</script>

<section class="bg-amber-800">
	<Container>
		<div class="grid grid-cols-2 gap-20 px-30 py-12">
			<div>
				<div class=" mb-4 font-sans text-xs font-bold tracking-widest text-bakery-accent uppercase">
					boulangerie artisanale - strasbourg
				</div>
				<div class=" font-serif text-8xl leading-[0.98] tracking-tight">
					<h1>
						Le pain du jour, <em class="block text-bakery-brown">façonné à la main.</em>
					</h1>
				</div>
				<div class="text-sans mb-11 text-sm text-bakery-brown">
					Chez A K Boulangerie, on pétrit, on attend et on cuit sur place, tous les matins. Des
					pains au levain, des viennoiseries au beurre et quelques douceurs de saison.
				</div>
			</div>
			<div class="aspect-4/5 overflow-hidden rounded-3xl">
				<img
					src={heroBreadImage}
					alt="miches au levain sur plan fariné"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
	</Container>
</section>
