<script>
	import Craft from '$lib/components/Craft.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Products from '$lib/components/Products.svelte';
	import Visit from '$lib/components/Visit.svelte';
</script>

<svelte:head>
	<title>A K Boulangerie &middot; Boulangerie artisanale à Strasbourg</title>
	<meta
		name="description"
		content="Pains au levain, viennoiseries au beurre et pâtisseries de saison, façonnés à la main chaque matin à Strasbourg."
	/>
</svelte:head>

<Hero />
<Products />
<Craft />
<Visit />
