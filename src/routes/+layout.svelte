<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScroolToTopBtn from '$lib/components/ScroolToTopBtn.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-screen flex-col">
	<Header />
	<main>{@render children()}</main>
	<Footer />
	<ScroolToTopBtn />
</div>
