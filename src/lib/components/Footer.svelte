<script>
	import Container from '$lib/components/Container.svelte';
</script>

<footer
	class="bg-bakery-dark px-5 pt-12 pb-8 text-bakery-on-dark md:px-10 lg:pt-18 lg:pb-10 xl:px-30"
>
	<Container>
		<div
			class="flex flex-col gap-7 border-b border-bakery-line-dark pb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pb-14"
		>
			<div>
				<div class="mb-3 flex items-center gap-2.5 font-serif text-bakery-cream lg:gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-full border-[1.5px] border-bakery-cream text-[20px] leading-none tracking-tighter lg:size-11 lg:text-[22px]"
					>
						<span>A</span><span class="text-bakery-accent-soft italic">K</span>
					</div>
					<span class="text-[26px] lg:text-[30px]">A K Boulangerie</span>
				</div>
				<p class="text-[15px]">Boulangerie artisanale, Strasbourg.</p>
			</div>

			<div class="flex flex-col gap-5 text-[15px] leading-[1.8] sm:flex-row sm:gap-12 lg:gap-20">
				<address class="not-italic">
					<h3 class="mb-2 font-semibold text-bakery-cream">Adresse</h3>
					12 rue du Fournil<br />67000 Strasbourg
				</address>
				<div>
					<h3 class="mb-2 font-semibold text-bakery-cream">Contact</h3>
					<a href="tel:+33388001234" class="hover:text-bakery-cream">03 88 00 12 34</a><br />
					<a href="mailto:bonjour@akboulangerie.fr" class="hover:text-bakery-cream">
						bonjour@akboulangerie.fr
					</a>
				</div>
				<div>
					<h3 class="mb-2 font-semibold text-bakery-cream">Suivre</h3>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-bakery-cream"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col gap-2 pt-5 text-[13px] text-bakery-on-dark/75 lg:flex-row lg:justify-between lg:pt-7"
		>
			<p>&copy; 2026 A K Boulangerie &middot; Projet fictif</p>
			<div class="flex gap-5 lg:gap-7">
				<a href="#accueil" class="hover:text-bakery-cream">Mentions légales</a>
				<a href="#accueil" class="hover:text-bakery-cream">Confidentialité</a>
			</div>
		</div>
	</Container>
</footer>
