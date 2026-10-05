<script>
	import Container from './Container.svelte';
	import faconnageMiche from '$lib/assets/faconnage-miche.webp';
	import { craftSteps } from '$lib/data/craft-steps.js';
</script>

<section id="savoir-faire" class="mx-6 rounded-[36px] bg-bakery-dark-section px-24 py-30">
	<Container>
		<div class="mb-16 grid grid-cols-2 items-end gap-20">
			<div>
				<p class="mb-4.5 font-semibold tracking-[0.14em] text-bakery-accent-soft uppercase">
					notre savoir faire
				</p>
				<h2 class="font-serif text-6xl leading-[1.02] tracking-[-0.015em] text-bakery-cream">
					Du temps, de la farine <br /> <em class="block">et nos mains.</em>
				</h2>
			</div>
			<p class="max-w-120 text-[18px] text-bakery-sand">
				Pas de pâte surgelée, pas d’améliorant. Nos pâtes reposent le temps qu’il faut, et tout est
				préparé dans le fournil, derrière la boutique.
			</p>
		</div>
		<img src={faconnageMiche} alt="Façonnage de miche" class="mb-18 w-full rounded-3xl" />
		<div class="grid grid-cols-3 gap-12">
			{#each craftSteps as step (step.step)}
				<div class="border-t border-t-bakery-muted pt-7">
					<p class="mb-4 font-serif text-[22px] text-bakery-accent-soft">{step.step}</p>
					<h3 class="mb-2.5 text-2xl text-[19px] text-bakery-cream">{step.title}</h3>
					<p class="text-[15px] text-bakery-sand">{step.description}</p>
				</div>
			{/each}
		</div>
	</Container>
</section>
