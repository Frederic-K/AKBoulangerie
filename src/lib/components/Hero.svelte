<script>
	import Container from '$lib/components/Container.svelte';
	import heroBreadImage from '$lib/assets/hero-bread.webp';
</script>

<section id="accueil" class="bg-bakery-cream px-5 pt-12 pb-32 lg:px-30">
	<Container>
		<div class="grid grid-cols-2 items-center gap-20">
			<div>
				<div class="mb-7 text-[13px] font-semibold tracking-[0.14em] text-bakery-accent uppercase">
					Boulangerie artisanale &middot; Strasbourg
				</div>

				<h1 class="mb-8 font-serif text-[92px] leading-[0.98] tracking-[-0.02em]">
					Le pain du jour, <em class="block text-bakery-brown">façonné à la main.</em>
				</h1>

				<p class="mb-11 max-w-115 text-lg leading-[1.65] text-bakery-muted">
					Chez A K Boulangerie, on pétrit, on attend et on cuit sur place, tous les matins. Des
					pains au levain, des viennoiseries au beurre et quelques douceurs de saison.
				</p>
				<div class="flex items-center gap-7">
					<a
						href="#produits"
						class="rounded-full bg-bakery-dark px-7.5 py-4.25 text-[15px] font-semibold text-bakery-cream"
					>
						Découvrir nos produits
					</a>
					<a
						href="#horaires"
						class="border-b border-[#c9b9a3] pb-0.75 text-[15px] font-semibold text-bakery-brown"
					>
						Voir les horaires &rarr;
					</a>
				</div>
			</div>
			<div class="relative">
				<div
					class="absolute top-12 -left-10 flex items-center gap-3.5 rounded-[18px] bg-bakery-cream px-5.5 py-4.5 shadow-lg"
				>
					<span class="size-2.5 animate-pulse rounded-full bg-bakery-accent"></span>
					<div>
						<p class="text-[14px] font-bold text-bakery-dark">Sorti du four</p>
						<p class="text-[13px] text-bakery-muted">chaque matin dès 6h30</p>
					</div>
				</div>
				<div class="aspect-4/5 overflow-hidden rounded-[28px]">
					<img
						src={heroBreadImage}
						alt="miches au levain sur plan fariné"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</Container>
</section>
