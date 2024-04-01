<script lang="ts">
	import { onMount } from 'svelte';
	import CardWithSideImageLg from '../components/Cards/CardWithSideImageLg.svelte';
	import CardWithSideImageSm from '../components/Cards/CardWithSideImageSm.svelte';
	import CardWithView from '../components/Cards/CardWithView.svelte';
	import PrimaryCard from '../components/Cards/PrimaryCard.svelte';
	import { categories } from '$lib/store';

	export let data: any;

</script>

<div class="container">
	<div class="row mt-4">
		{#if data?.categories?.length > 0}
			{#each data?.categories as category, index}
				<PrimaryCard
					slug={`/${category.slug}`}
					image={category?.image}
					category=""
					date=""
					title={category?.name}
				/>
			{/each}
		{/if}
	</div>

	<!-- most popular starts -->
	<div class="row">
		<div class="col-md-12 mt-3 text-center">
			<h5 class="card-title">Most Popular</h5>
			<div class="container-fluid justify-content-around mx-auto mt-5 row">
				{#if data?.data?.recentPost?.length > 0}
					{#each data?.data?.recentPost as post, index}
						<div class="card-container text-start">
							<CardWithSideImageSm
								slug={`${post.data.category.slug}/${post.data.tags[0].slug}/${post.data.slug}`}
								image={post.image}
								category="Popular"
								date="Jan 01, 2045"
								title={post.data?.title}
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<!-- most popular ends -->

	<!-- recent posts starts -->
	<div class="row">
		<div class="col-md-12 mt-2 text-center">
			<h5 class="card-title">Recent Post</h5>
			<div class="container-fluid mt-5 row mx-auto">
				{#if data?.data?.recentPost?.length > 0}
					{#each data?.data?.recentPost as post, index}
						{#if index < 4}
							<PrimaryCard
								slug={`${post.data.category.slug}/${post.data.tags[0].slug}/${post.data.slug}`}
								image={post.image}
								category="Latest"
								date="Jan 01, 2045"
								title={post.data.title}
							/>
						{/if}
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<!-- recent posts ends -->

	<div class="row">
		<div class="col-md-12 mt-3 text-center">
			<div class="card" style="height: 400px;">
				<div class="card-body">
					<h5 class="card-title">Who are we ?</h5>
					<a href="/nepal"> Read more</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card-container {
		width: 48%;
		margin: auto;
		text-align: start;
	}
	@media (max-width: 768px) {
		.card-container {
			width: 100%;
		}
	}
</style>
