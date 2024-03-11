
<script lang="ts">
	import { CATEGORIES, FRONTEND_URL } from "$lib/const/api";
	import getApi from "$lib/helper/get";
	import type { PageLoad } from "../routes/$types";

    // export let categories: { name: string; slug: string }[] = [];
     let categories: { name: string; slug: string }[] = [];
       async function fetchData() {
        let data = await getApi(CATEGORIES);
        categories = data.categories;
         console.log(categories)
       }
       fetchData();
</script>

<!-- Categories Start -->
<!-- <div class="mb-3">
    <div class="section-title mb-0">
        <h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
    </div>
    <div class="bg-white border border-top-0 p-3"> -->
        <div class="d-flex flex-wrap m-n1">
            {#if categories.length > 0}
            {#each categories as category}
            <a href="{FRONTEND_URL}/category/{category.slug}" class="btn btn-sm btn-outline-secondary m-1">{category.name}</a>
            {/each}
            {/if}
        </div>
    <!-- </div>
</div> -->
<!-- Categories End -->