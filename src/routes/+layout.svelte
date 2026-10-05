<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTopBtn from '$lib/components/ScrollToTopBtn.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-screen flex-col bg-bakery-cream">
	<Header />
	<main class="flex-1">{@render children()}</main>
	<Footer />
	<ScrollToTopBtn />
</div>
