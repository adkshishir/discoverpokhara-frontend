<script lang="ts">
	import { onMount } from "svelte";
	import PrimaryCard from "./Cards/PrimaryCard.svelte";
	import { FRONTEND_URL } from "$lib/const/api";
export let data:any={};
</script>
 <!-- Main News Slider Start -->
 <div class="container-fluid">
     <div class="row">
        <img src="/logo1.webp" class="image-fluid " style="height: 62vh;width: 100%;" alt='Discover Pokhara banner'/>
        <!-- <div class="col-lg-7 px-0">
         
            <div class="owl-carousel main-carousel position-relative">
              {#each data.posts as post,index}
              {#if index<5}
                <div title="{post.title}" class="position-relative overflow-hidden" style="height: 500px;">
                    <img class="img-fluid h-100" alt="{post.title}" src={post.image} style="object-fit: cover;">
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/category/{data.slug}">{data.name}</a>
                            <a class="text-white" href="/{post.slug}">Jan 01</a>
                        </div>
                        <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="/{post.slug}">{post.title}</a>
                    </div>
                </div>
                {/if}
                {/each}

            </div>
        </div>
        <div class="col-lg-5 px-0">
            <div class="row mx-0">
                {#each data.posts as post,index}
                {#if index>4&&index<9}
                <PrimaryCard   slug="{post.slug}" image={post.image} category="{data.name}" date="Jan 01, 2045" title="{post.title}"/>
                {/if}
         {/each}
            </div>
        </div> -->
    </div>
</div>
<!-- Main News Slider End -->