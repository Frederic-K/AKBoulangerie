<script>
	import Container from '$lib/components/Container.svelte';
	import { openingHours } from '$lib/data/opening-hours.js';
	import itineraireBoulangerie from '$lib/assets/itineraire-boulangerie.webp';
</script>

<section id="horaires" class="px-30 py-34">
	<Container>
		<div class="grid grid-cols-2 gap-20">
			<div>
				<p class="mb-4.5 text-[13px] font-semibold tracking-[0.14em] text-bakery-accent uppercase">
					horaires &amp; adresse
				</p>
				<h2 class="mb-12 font-serif text-6xl leading-[1.02] tracking-[-0.015em]">
					Passez nous voir.
				</h2>
				<dl>
					{#each openingHours as { day, hours } (day)}
						<div
							class={[
								'flex justify-between border-b border-bakery-line-soft/50 py-4.5 text-[17px]',
								!hours && 'text-bakery-muted'
							]}
						>
							<dt class="font-semibold">{day}</dt>
							<dd>{hours ?? 'Fermé'}</dd>
						</div>
					{/each}
				</dl>
			</div>
			<div id="nous-trouver" class="flex flex-col rounded-[28px] bg-bakery-sand p-5">
				<img
					src={itineraireBoulangerie}
					alt="Plan du quartier de la boulangerie à Strasbourg"
					loading="lazy"
					class="aspect-16/10 w-full rounded-[18px] object-cover"
				/>
				<div class="flex items-end justify-between gap-6 px-4 pt-7 pb-3">
					<address class="not-italic">
						<p class="mb-2 font-serif text-[28px] leading-[1.15]">
							12 rue du Fournil <br />67000 Strasbourg
						</p>
						<p class="text-[15px] text-bakery-muted">
							<a href="tel:+33388001234">03 88 00 12 34</a> &middot;
							<a href="mailto:bonjour@akboulangerie.fr">bonjour@akboulangerie.fr</a>
						</p>
					</address>
					<a
						href="https://maps.app.goo.gl/T6CFKWhwKmecoknC6"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-bakery-dark px-6.5 py-3.75 text-[15px] font-semibold whitespace-nowrap text-bakery-cream"
					>
						Itinéraire <span aria-hidden="true">&nearr;</span>
					</a>
				</div>
			</div>
		</div>
	</Container>
</section>
