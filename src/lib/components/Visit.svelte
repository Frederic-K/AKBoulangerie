<script>
	import Container from '$lib/components/Container.svelte';
	import { openingHours } from '$lib/data/opening-hours.js';
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
								'flex justify-between border-b border-bakery-line-soft py-4.5 text-[17px]',
								!hours && 'text-bakery-muted'
							]}
						>
							<dt class="font-semibold">{day}</dt>
							<dd>{hours ?? 'Fermé'}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</Container>
</section>
