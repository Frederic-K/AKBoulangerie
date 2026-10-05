<script>
	import Container from '$lib/components/Container.svelte';
	import faconnageMiche from '$lib/assets/faconnage-miche.webp';
	import { craftSteps } from '$lib/data/craft-steps.js';
</script>

<section id="savoir-faire" class="mx-6 rounded-[36px] bg-bakery-dark-section px-24 py-30">
	<Container>
		<div class="mb-16 grid grid-cols-2 items-end gap-20">
			<div>
				<p
					class="mb-4.5 text-[13px] font-semibold tracking-[0.14em] text-bakery-accent-soft uppercase"
				>
					notre savoir-faire
				</p>
				<h2 class="font-serif text-6xl leading-[1.02] tracking-[-0.015em] text-bakery-cream">
					Du temps, de la farine <em class="block">et nos mains.</em>
				</h2>
			</div>
			<p class="max-w-120 text-[18px] leading-[1.65] text-pretty text-bakery-on-dark">
				Pas de pâte surgelée, pas d’améliorant. Nos pâtes reposent le temps qu’il faut, et tout est
				préparé dans le fournil, derrière la boutique.
			</p>
		</div>
		<img
			src={faconnageMiche}
			alt="Façonnage de miche"
			loading="lazy"
			class="mb-18 aspect-21/8 w-full rounded-3xl object-cover"
		/>
		<div class="grid grid-cols-3 gap-12">
			{#each craftSteps as step (step.step)}
				<div class="border-t border-t-bakery-line-dark pt-7">
					<p class="mb-4 font-serif text-[22px] text-bakery-accent-soft">{step.step}</p>
					<h3 class="mb-2.5 text-[19px] font-semibold text-bakery-cream">{step.title}</h3>
					<p class="text-[15px] leading-[1.65] text-bakery-on-dark">{step.description}</p>
				</div>
			{/each}
		</div>
	</Container>
</section>
