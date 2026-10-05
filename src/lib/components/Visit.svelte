<script>
	import Container from '$lib/components/Container.svelte';
	import { openingHours } from '$lib/data/opening-hours.js';
	import itineraireBoulangerie from '$lib/assets/itineraire-boulangerie.webp';
</script>

<section id="horaires" class="px-30 py-34">
	<Container>
		<div class="grid grid-cols-2 gap-20">
			<article>
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
			</article>
			<article class="flex flex-col rounded-[28px] bg-bakery-sand p-5">
				<img
					src={itineraireBoulangerie}
					alt="Itinéraire vers la boulangerie"
					loading="lazy"
					class="rounded-[18px] object-cover"
				/>
				<div class="flex items-end justify-between gap-6 p-7">
					<div>
						<p class="mb-2 font-serif text-[28px] leading-[1.15]">
							12 rue du Fournil <br />67000 Strasbourg
						</p>
						<p class="text-[15px] text-bakery-muted">
							03 88 00 12 35 &middot; <a href="mailto:bonjour@akboulangerie.fr"
								>bonjour@akboulangerie.fr</a
							>
						</p>
					</div>
					<button
						id="nous-trouver"
						type="button"
						onclick={() => {}}
						class="rounded-full bg-bakery-dark px-6.5 py-3.75 text-bakery-cream"
					>
						Itinéraire &nearr;
					</button>
				</div>
			</article>
		</div>
	</Container>
</section>
