
  <script lang="ts">
import { onMount } from "svelte";
	import CardWithSideImageSm from "./Cards/CardWithSideImageSm.svelte";

    export let data:any;
  </script>
<!-- Popular News Start -->
<div class="mb-3">
    <div class="section-title mb-0">
        <h4 class="m-0 text-uppercase font-weight-bold">Tranding News</h4>
    </div>
    <div class="bg-white border border-top-0 p-3">
        {#each data.posts as post,index}
        {#if index < 5}
       <CardWithSideImageSm image={post.image} category={data.name} date={post.publishedAt} title={post.title.slice(0, 30)} />
        {/if}
        {/each}
    </div>
</div>
<!-- Popular News End -->