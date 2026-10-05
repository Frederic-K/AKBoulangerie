<script>
	import Container from '$lib/components/Container.svelte';
</script>

<footer class="bg-bakery-dark px-5 pt-18 pb-10 text-bakery-on-dark lg:px-30">
	<Container>
		<div class="flex items-start justify-between gap-10 border-b border-bakery-line-dark pb-14">
			<div>
				<div class="mb-3 flex items-center gap-3 font-serif text-bakery-cream">
					<div
						class="flex size-11 items-center justify-center rounded-full border-[1.5px] border-bakery-cream text-[22px] leading-none tracking-tighter"
					>
						<span>A</span><span class="text-bakery-accent-soft italic">K</span>
					</div>
					<span class="text-[30px]">A K Boulangerie</span>
				</div>
				<p class="text-[15px]">Boulangerie artisanale, Strasbourg.</p>
			</div>

			<div class="flex gap-20 text-[15px] leading-[1.8]">
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

		<div class="flex justify-between pt-7 text-[13px] text-bakery-on-dark/75">
			<p>&copy; 2026 A K Boulangerie &middot; Projet fictif</p>
			<div class="flex gap-7">
				<a href="#accueil" class="hover:text-bakery-cream">Mentions légales</a>
				<a href="#accueil" class="hover:text-bakery-cream">Confidentialité</a>
			</div>
		</div>
	</Container>
</footer>
