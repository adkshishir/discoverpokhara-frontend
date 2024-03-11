
<script lang="ts">
	import { FRONTEND_URL, TAGS } from "$lib/const/api";
	import getApi from "$lib/helper/get";
	import { onMount } from "svelte";

    export let tags: { name: string; slug: string }[] = [];
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
            {#each tags as tag}
            <a href="{FRONTEND_URL}/tags/{tag.slug}" class="btn btn-sm btn-outline-secondary m-1">{tag.name}</a>
            {/each}
        </div>
<!-- Tags End -->