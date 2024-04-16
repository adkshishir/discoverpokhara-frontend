<script lang="ts">
	import { onMount } from 'svelte';
	import CardWithSideImageLg from './Cards/CardWithSideImageLg.svelte';
	import CardWithSideImageSm from './Cards/CardWithSideImageSm.svelte';
	import CardWithView from './Cards/CardWithView.svelte';
	import SocialMediaCard from './Cards/SocialMediaCard.svelte';
	import PopularNews from './PopularNews.svelte';
	import Tags from './Tags.svelte';
	import { FRONTEND_URL } from '$lib/const/api';
	export let data: any;
	export let latest: any;
	export let popular: any;
</script>

<!-- News With Sidebar Start -->
<div class="container-fluid">
	<div class="container">
		<img
			class="img-fluid mb-5 mx-auto"
			style="max-height: 50vh;object-fit: cover; width: 100%;"
			src={data?.media[0]?.original_url}
			alt={data?.title}
		/>
		<div class="row">
			<div class="col-lg-8">
				<div class="row">
					{#if latest?.length > 0}
					{#each latest as post, index}
						{#if index < 2}
							<CardWithView
								image={post?.image}
								category={data?.title}
								title={post?.data?.h1?.slice(0, 20)}
								slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
								description={post?.data?.description}
								date={post?.data?.updated_at?.slice(0, 10)}
								comments={post?.data?.comments.length}
								authorName={post?.data?.author?.name}
								authorImage={post?.data?.author?.image}
							/>
						{:else if index >= 2 && index < 4}
							{#if index == 2}
								<div class="col-lg-12 mb-3">
									<a href="/"><img class="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
								</div>
							{/if}
							<CardWithView
								image={post?.image}
								category={data?.title}
								date={post?.data?.updated_at?.slice(0, 10)}
								title={post?.data?.h1?.slice(0, 20)}
								slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
								description={post?.data?.description}
								comments={post?.data?.comments.length}
								authorName={post?.data?.author?.name}
								authorImage={post?.data?.author?.image}
							/>
						{:else if index >= 4 && index < 8}
							<div class="col-lg-6">
								{#if index < 6}
									<CardWithSideImageSm
										image={post?.image}
										category={data?.title}
										date={post?.data?.updated_at?.slice(0, 10)}
										title={post?.data?.h1?.slice(0, 30)}
										slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
									/>
								{:else}
									<CardWithSideImageSm
										image={post?.image}
										category={data?.title}
										date={post?.data?.updated_at?.slice(0, 10)}
										title={post?.data?.h1?.slice(0, 30)}
										slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
									/>
								{/if}
							</div>
						{:else if index == 8}
							<!-- <div class="col-lg-12 mb-3">
								<a href="/"><img class="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
							</div> -->
							<CardWithSideImageLg
								image={post?.image}
								category={data?.title}
								date={post?.data?.updated_at?.slice(0, 10)}
								title={post?.data?.h1}
								authorImage={post?.data?.author.image}
								authorName={post?.data?.author.name}
								comments={post?.data?.comments.length}
								slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
							/>
						{:else if index >= 9 && index < 13}
							<div class="col-lg-6">
								{#if index < 11}
									<CardWithSideImageSm
										image={post?.image}
										category={data?.title}
										date={post?.data?.updated_at?.slice(0, 10)}
										title={post?.data?.h1?.slice(0, 30)}
										slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
									/>
								{:else}
									<CardWithSideImageSm
										image={post?.image}
										category={data?.title}
										date={post?.data?.updated_at?.slice(0, 10)}
										title={post?.data?.h1?.slice(0, 30)}
										slug={`${data.slug}/${post?.data?.tags[0]?.slug}/${post?.data?.slug}`}
									/>
								{/if}
							</div>
						{/if}
					{/each}
					{/if}
				</div>
			</div>

			<div class="col-lg-4">
				<!-- Social Follow Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
					</div>
					<div class="bg-white border border-top-0 p-3">
						<SocialMediaCard
							logoClass="fab fa-facebook-f"
							backgroundColor="#39569C"
							fansCount="12,345"
							slug="https://www.facebook.com/profile.php?id=61557240062151"
						></SocialMediaCard>
						<SocialMediaCard
							logoClass="fab fa-instagram"
							backgroundColor="#C8359D"
							fansCount="12,345"
							slug="https://www.instagram.com/"
						></SocialMediaCard>
						<SocialMediaCard
							logoClass="fab fa-linkedin-in"
							backgroundColor="#0185AE"
							fansCount="12,345"
							slug="https://www.linkedin.com/"
						></SocialMediaCard>
						<SocialMediaCard
							logoClass="fab fa-twitter"
							backgroundColor="#1DA1F2"
							fansCount="12,345"
							slug="https://twitter.com/Discoverpokhara?t=ivcEuW9lI0f0CQlhapj5"
						></SocialMediaCard>
						<SocialMediaCard
							logoClass="fab fa-reddit"
							backgroundColor="#FF4500"
							fansCount="12,345"
							slug="https://www.reddit.com/"
						></SocialMediaCard>
					</div>
				</div>
				<!-- Social Follow End-->

				<PopularNews data={popular} categorySlug={data.slug} categoryName={data.title} /> 

				<!-- Ads Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Advertisement</h4>
					</div>
					<div class="bg-white text-center border border-top-0 p-3">
						<a href="/"><img class="img-fluid" src="img/news-800x500-2.jpg" alt="" /></a>
					</div>
				</div>
				<!-- Ads End -->

				<!-- Newsletter Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Newsletter</h4>
					</div>
					<div class="bg-white text-center border border-top-0 p-3">
						<p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
						<div class="input-group mb-2" style="width: 100%;">
							<input type="text" class="form-control form-control-lg" placeholder="Your Email" />
							<div class="input-group-append">
								<button class="btn btn-primary font-weight-bold px-3">Sign Up</button>
							</div>
						</div>
						<small>Lorem ipsum dolor sit amet elit</small>
					</div>
				</div>
				<!-- Newsletter End -->

				<!-- Tags Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
					</div>
					<div class="bg-white border border-top-0 p-3">
						<Tags />
						<!-- <div class="d-flex flex-wrap m-n1">
                            {#each tags as tag}
                            <a href="{tag?.slug}" class="btn btn-sm btn-outline-secondary m-1">{tag.name}</a>
                            {/each}
						</div> -->
					</div>
				</div>
				<!-- Tags End -->
			</div>
		</div>
	</div>
</div>
<!-- News With Sidebar End -->
