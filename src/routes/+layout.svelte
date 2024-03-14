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
<!--Start of Tawk.to Script-->
<script type="text/javascript">
	var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
	(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/65f2c5a68d261e1b5f6d86b1/1hou584u8';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
	})();
	</script>
	<!-- End of Tawk.to Script -->
	<script src="{FRONTEND_URL}/js/main.js"></script>
{/if}
