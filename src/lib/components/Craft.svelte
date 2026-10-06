<script>
	import Container from '$lib/components/Container.svelte';
	import faconnageMiche from '$lib/assets/faconnage-miche.webp';
	import { craftSteps } from '$lib/data/craft-steps.js';
</script>

<section
	id="savoir-faire"
	class="mx-3 rounded-[28px] bg-bakery-dark-section px-6 py-16 md:mx-6 md:px-12 lg:rounded-[36px] lg:px-24 lg:py-30"
>
	<Container>
		<div class="mb-8 grid gap-4.5 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-20">
			<div>
				<p
					class="mb-3.5 text-[12px] font-semibold tracking-[0.14em] text-bakery-accent-soft uppercase lg:mb-4.5 lg:text-[13px]"
				>
					notre savoir-faire
				</p>
				<h2
					class="font-serif text-[38px] leading-[1.05] tracking-[-0.015em] text-bakery-cream lg:text-6xl lg:leading-[1.02]"
				>
					Du temps, de la farine <em class="lg:block">et nos mains.</em>
				</h2>
			</div>
			<p
				class="max-w-120 text-[16px] leading-[1.6] text-pretty text-bakery-on-dark lg:text-[18px] lg:leading-[1.65]"
			>
				Pas de pâte surgelée, pas d’améliorant. Nos pâtes reposent le temps qu’il faut, et tout est
				préparé dans le fournil, derrière la boutique.
			</p>
		</div>
		<img
			src={faconnageMiche}
			alt="Façonnage de miche"
			loading="lazy"
			class="mb-10 aspect-4/3 w-full rounded-[18px] object-cover lg:mb-18 lg:aspect-21/8 lg:rounded-3xl"
		/>
		<div class="flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-12">
			{#each craftSteps as step (step.step)}
				<div class="flex gap-4.5 border-t border-t-bakery-line-dark pt-5 lg:block lg:pt-7">
					<p class="font-serif text-[20px] text-bakery-accent-soft lg:mb-4 lg:text-[22px]">
						{step.step}
					</p>
					<div>
						<h3 class="mb-1.5 text-[17px] font-semibold text-bakery-cream lg:mb-2.5 lg:text-[19px]">
							{step.title}
						</h3>
						<p class="text-[15px] leading-[1.6] text-bakery-on-dark lg:leading-[1.65]">
							{step.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</section>
