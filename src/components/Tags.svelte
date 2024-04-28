
<script lang="ts">
	import { FRONTEND_URL, TAGS } from "$lib/const/api";
	import getApi from "$lib/helper/get";
	import { error } from "@sveltejs/kit";
	import { onMount } from "svelte";
	
     let tags: { category:{slug:string};title: string; slug: string }[];

       async function fetchData() {
        let data = await getApi(TAGS);
        tags = data.tags;
       }
       onMount(async()=>{
      await fetchData();
       })
</script>

<!-- Tags Start -->
        <div class="d-flex flex-wrap m-n1">
           
            {#if tags?.length > 0}
            {#each tags as tag}
            <a data-sveltekit-reload href="{FRONTEND_URL}/{tag.category?.slug}/{tag?.slug}" class="btn btn-sm btn-outline-secondary m-1">{tag.title}</a>
            {/each}
            {/if}
        </div>
<!-- Tags End -->