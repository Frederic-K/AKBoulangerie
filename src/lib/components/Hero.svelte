<script>
	import Container from '$lib/components/Container.svelte';
	import heroBreadImage from '$lib/assets/hero-bread.webp';
</script>

<section class="">
	<Container>
		<div class="grid grid-cols-2 gap-20 px-30 py-12">
			<div>
				<div class=" mb-4 text-xs font-bold tracking-widest text-bakery-accent uppercase">
					boulangerie artisanale - strasbourg
				</div>

				<h1 class=" mb-8 font-serif text-7xl leading-[0.98] tracking-tight">
					Le pain du jour, <em class="block text-bakery-brown">façonné à la main.</em>
				</h1>

				<p class="mb-11 max-w-115 text-lg leading-relaxed text-bakery-muted">
					Chez A K Boulangerie, on pétrit, on attend et on cuit sur place, tous les matins. Des
					pains au levain, des viennoiseries au beurre et quelques douceurs de saison.
				</p>
				<div>
					<a
						href="#produits"
						class="inline-block rounded-3xl bg-bakery-dark px-4 py-2 text-sm text-bakery-cream"
					>
						Découvrir nos produits
					</a>
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
