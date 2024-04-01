
<script lang="ts">
	import { FRONTEND_URL } from "$lib/const/api";

 export let image:string;
 export let category:string;
 export let date:string;
 export let title:string;
 export let className:string|null = null;
 export let slug:string;
</script>


<div title="{title}" class="col-md-6 px-0 {className}">
    <div class="position-relative overflow-hidden" style="height: 250px;">
        <a href="{FRONTEND_URL}/{slug}"><img class="img-fluid h-100 w-100" src={image} alt={title}></a>
        <div class="overlay">
            <div class="mb-2">
                {#if category}
                <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                href="{FRONTEND_URL}/{slug}">{category}</a>
                {/if}
                    {#if date}
                    <a class="text-white" href={slug}><small>{date}</small></a>
                    {/if}
            </div>
            <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href={slug}>{title.slice(0, 40)}{title.length > 40 ? '...' : ''}</a>
        </div>
    </div>
</div>