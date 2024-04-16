
  <script lang="ts">
import { onMount } from "svelte";
	import CardWithSideImageSm from "./Cards/CardWithSideImageSm.svelte";

    export let data:any;
    export let categoryName:string;
    export let categorySlug:string;
  </script>
<!-- Popular News Start -->
<div class="mb-3">
    <div class="section-title mb-0">
        <h4 class="m-0 text-uppercase font-weight-bold">Most Viewed</h4>
    </div>
    <div class="bg-white border border-top-0 p-3">
        {#each data as post,index}
        {#if index < 5}
       <CardWithSideImageSm slug={`${categorySlug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`} image={post.image} category={categoryName} date={post.data?.updated_at?.slice(0,10)} title={post.data?.h1?.slice(0, 30)} />
        {/if}
        {/each}
    </div>
</div>
<!-- Popular News End -->