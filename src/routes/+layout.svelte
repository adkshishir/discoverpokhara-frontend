<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '../common/Footer.svelte';
	import Header from '../common/Header.svelte';
    import {FRONTEND_URL} from '$lib/const/api'
   
	let isLoaded = false;
	onMount(async () => {
		setTimeout(() => {
			isLoaded = true;
		}, 10);
      
	});
</script>

<Header  />
<slot />
<Footer />

<div>
	{#if isLoaded}
		<!-- Template Javascript -->
		<script src="{FRONTEND_URL}/js/main.js"></script>
	{/if}
</div>
