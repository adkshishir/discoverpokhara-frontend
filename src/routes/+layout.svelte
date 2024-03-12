<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '../common/Footer.svelte';
	import Header from '../common/Header.svelte';
	import { CATEGORIES, FRONTEND_URL,TAGS} from '$lib/const/api';
	import getApi from '$lib/helper/get';
	import { PUBLIC_FRONTEND_URL } from '$env/static/public';
	 let data:any;
	let isLoaded = false;
	onMount(async () => {
		setTimeout(() => {
			isLoaded = true;
		}, 100);
      data=await getApi(CATEGORIES);
	  console.log(data)
	});

</script>

<Header />
<slot />
<Footer data={data} />

<div>
</div>
{#if isLoaded}
<script src="{PUBLIC_FRONTEND_URL}/js/main.js"></script>
{/if}
