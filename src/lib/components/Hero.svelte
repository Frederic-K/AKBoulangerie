<script>
	import Container from '$lib/components/Container.svelte';
	import heroBreadImage from '$lib/assets/hero-bread.webp';
</script>

<section id="accueil" class="px-5 pt-2 pb-18 md:px-10 lg:pt-12 lg:pb-32 xl:px-30">
	<Container>
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
			<div>
				<div
					class="mb-4 text-[12px] font-semibold tracking-[0.14em] text-bakery-accent uppercase lg:mb-7 lg:text-[13px]"
				>
					Boulangerie artisanale &middot; Strasbourg
				</div>

				<h1
					class="mb-5 font-serif text-[52px] leading-none tracking-[-0.02em] text-bakery-dark md:text-7xl lg:mb-8 lg:leading-[0.98] xl:text-[92px]"
				>
					Le pain du jour, <em class="text-bakery-brown lg:block">façonné à la main.</em>
				</h1>

				<p
					class="mb-7 max-w-115 text-base leading-[1.6] text-pretty text-bakery-muted lg:mb-11 lg:text-lg lg:leading-[1.65]"
				>
					Chez A K Boulangerie, on pétrit, on attend et on cuit sur place, tous les matins. Des
					pains au levain, des viennoiseries au beurre et quelques douceurs de saison.
				</p>
				<div class="flex flex-col gap-7 lg:flex-row lg:items-center">
					<a
						href="#produits"
						class="rounded-full bg-bakery-dark px-7.5 py-4 text-center text-[15px] font-semibold text-bakery-cream lg:py-4.25"
					>
						Découvrir nos produits
					</a>
					<a
						href="#horaires"
						class="border-b border-bakery-line-soft pb-0.75 text-[15px] font-semibold text-bakery-brown max-lg:hidden"
					>
						Voir les horaires &rarr;
					</a>
				</div>
			</div>
			<div class="relative order-first lg:order-none">
				<div
					class="absolute top-12 -left-10 flex items-center gap-3.5 rounded-[18px] bg-bakery-cream px-5.5 py-4.5 shadow-lg max-lg:hidden"
				>
					<span class="size-2.5 rounded-full bg-bakery-accent motion-safe:animate-pulse"></span>
					<div>
						<p class="text-[14px] font-bold text-bakery-dark">Sorti du four</p>
						<p class="text-[13px] text-bakery-muted">chaque matin dès 6h30</p>
					</div>
				</div>
				<div class="aspect-4/5 overflow-hidden rounded-[22px] lg:rounded-[28px]">
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
