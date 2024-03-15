<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '../common/Footer.svelte';
	import Header from '../common/Header.svelte';
	import { CATEGORIES, FRONTEND_URL,TAGS} from '$lib/const/api';
	import getApi from '$lib/helper/get';

	 let data:any;
	let isLoaded = false;
	onMount(async () => {
		setTimeout(() => {
			isLoaded = true;
		}, 100);
    	  data=await getApi(CATEGORIES);
	});


// Example usage

</script>

<Header />
<slot />
<Footer data={data} />

<div>
</div>
{#if isLoaded}
	<!-- End of Tawk.to Script -->
	<script src="{FRONTEND_URL}/js/main.js"></script>
{/if}
