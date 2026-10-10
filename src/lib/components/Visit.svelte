<script>
	import Container from '$lib/components/Container.svelte';
	import { openingHours } from '$lib/data/opening-hours.js';
	import itineraireBoulangerie from '$lib/assets/itineraire-boulangerie.webp';
</script>

<section id="horaires" class="px-5 py-20 md:px-10 lg:py-34 xl:px-30">
	<Container>
		<div class="grid gap-9 lg:grid-cols-2 lg:gap-20">
			<div>
				<p
					class="mb-3.5 text-[12px] font-semibold tracking-[0.14em] text-bakery-accent uppercase lg:mb-4.5 lg:text-[13px]"
				>
					horaires &amp; adresse
				</p>
				<h2
					class="mb-7 font-serif text-[38px] leading-[1.05] tracking-[-0.015em] lg:mb-12 lg:text-6xl lg:leading-[1.02]"
				>
					Passez nous voir.
				</h2>
				<dl>
					{#each openingHours as { day, hours } (day)}
						<div
							class={[
								'flex justify-between border-b border-bakery-line-soft/50 py-3.75 text-[16px] lg:py-4.5 lg:text-[17px]',
								!hours && 'text-bakery-muted'
							]}
						>
							<dt class="font-semibold">{day}</dt>
							<dd>{hours ?? 'Fermé'}</dd>
						</div>
					{/each}
				</dl>
			</div>
			<div
				id="nous-trouver"
				class="flex flex-col rounded-[22px] bg-bakery-sand p-3.5 lg:rounded-[28px] lg:p-5"
			>
				<img
					src={itineraireBoulangerie}
					alt="Plan du quartier de la boulangerie à Strasbourg"
					loading="lazy"
					class="aspect-16/10 w-full rounded-[14px] object-cover lg:rounded-[18px]"
				/>
				<div
					class="flex flex-col gap-5 px-2 pt-5 pb-2 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:px-4 lg:pt-7 lg:pb-3"
				>
					<address class="not-italic">
						<p class="mb-1.5 font-serif text-[24px] leading-[1.15] lg:mb-2 lg:text-[28px]">
							12 rue du Fournil<span class="lg:hidden">,</span>
							<br class="max-lg:hidden" />67000 Strasbourg
						</p>
						<p class="text-[14px] text-bakery-muted lg:text-[15px]">
							<a href="tel:+33388001234">03 88 00 12 34</a> &middot;
							<a href="mailto:bonjour@akboulangerie.fr">bonjour@akboulangerie.fr</a>
						</p>
					</address>
					<a
						href="https://maps.app.goo.gl/T6CFKWhwKmecoknC6"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-bakery-dark px-6.5 py-3.75 text-center text-[15px] font-semibold whitespace-nowrap text-bakery-cream"
					>
						Itinéraire <span aria-hidden="true">&nearr;</span>
					</a>
				</div>
			</div>
		</div>
	</Container>
</section>
