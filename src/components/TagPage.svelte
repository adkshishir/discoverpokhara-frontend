<script lang="ts">
	import CardWithSideImageLg from './Cards/CardWithSideImageLg.svelte';
	import CardWithSideImageSm from './Cards/CardWithSideImageSm.svelte';
	import CardWithView from './Cards/CardWithView.svelte';
	import SocialMediaCard from './Cards/SocialMediaCard.svelte';
	import Tags from './Tags.svelte';
	import TagPagePopularNews from './TagPagePopularNews.svelte';
	import { FRONTEND_URL } from '$lib/const/api';
	export let data: any;
	export let latest: any;
	export let popular: any;
	export let seo: {
		meta_title: string;
		meta_description: string;
		meta_keywords: string;
		schema: string;
	};
</script>

<svelte:head>
	<title>{data?.data?.title}</title>
	<meta name="title" content={seo?.meta_title} />
	<meta name="description" content={seo?.meta_description} />
	<meta name="keywords" content={seo?.meta_keywords} />
	<script type="application/ld+json">
  {seo?.schema}
	</script>
	<meta property="og:title" content={seo?.meta_title} />
	<meta property="og:description" content={seo?.meta_description} />
	<meta property="og:image" content={data?.tag?.image} />
	<meta property="og:url" content="{FRONTEND_URL}/{data?.tag?.slug}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@discoverpokhara" />
</svelte:head>

<!-- News With Sidebar Start -->
<div class="container-fluid">
	<div class="container">
		<img
			class="img-fluid mb-5 mx-auto"
			style="max-height: 50vh;object-fit: cover; width: 100%;"
			src={data?.image}
			alt={data?.data?.name}
		/>
		<div class="row">
			<div class="col-lg-8">
				<div class="row">
					{#if typeof latest !== 'undefined' && latest?.length > 0}
						{#each latest as last, index}
							{#if index < 2}
								<CardWithView
									image={last?.image || ' '}
									category={last?.data?.category?.title}
									title={last?.data?.title?.slice(0, 20)}
									slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
									description={last?.data?.description}
									date={last?.data?.updated_at?.slice(0, 10)}
									comments={last?.data?.comments?.length}
								/>
							{:else if index >= 2 && index < 4}
								{#if index == 2}
									<div class="col-lg-12 mb-3">
										<a href="/"><img class="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
									</div>
								{/if}
								<CardWithView
									image={last?.image || ' '}
									category={last?.data?.category?.title}
									title={last?.data?.title?.slice(0, 20)}
									slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
									description={last?.data?.description}
									date={last?.data?.updated_at?.slice(0, 10)}
									comments={last?.data?.comments?.length}
								/>
							{:else if index >= 4 && index < 8}
								<div class="col-lg-6">
									{#if index < 6}
										<CardWithSideImageSm
											image={data?.image}
											category={last?.data?.category?.title}
											title={last?.data?.title?.slice(0, 20)}
											slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
											date={last?.data?.updated_at?.slice(0, 10)}
										/>
									{:else}
										<CardWithSideImageSm
											image={data?.image}
											category={last?.data?.category?.title}
											title={last?.data?.title?.slice(0, 20)}
											slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
											date={last?.data?.updated_at?.slice(0, 10)}
										/>
									{/if}
								</div>
							{:else if index == 8}
								<div class="col-lg-12 mb-3">
									<a href="/"><img class="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
								</div>
								<CardWithSideImageLg
									image={data?.image}
									category={last?.data?.category?.title}
									title={last?.data?.title?.slice(0, 20)}
									slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
									date={last?.data?.updated_at?.slice(0, 10)}
									comments={last?.data?.comments?.length}
								/>
							{:else if index >= 9 && index < 13}
								<div class="col-lg-6">
									{#if index < 11}
										<CardWithSideImageSm
											image={data?.image}
											category={last?.data?.category?.title}
											title={last?.data?.title?.slice(0, 20)}
											slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
											date={last?.data?.updated_at?.slice(0, 10)}
										/>
									{:else}
										<CardWithSideImageSm
											image={data?.image}
											category={last?.data?.category?.title}
											title={last?.data?.title?.slice(0, 20)}
											slug={`${last?.data?.category?.slug}/${data?.data?.slug}/${last?.data?.slug}`}
											date={last?.data?.updated_at?.slice(0, 10)}
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
						<!-- <SocialMediaCard
							logoClass="fab fa-linkedin-in"
							backgroundColor="#0185AE"
							fansCount="12,345"
							slug="https://www.linkedin.com/"
						></SocialMediaCard> -->
						<SocialMediaCard
							logoClass="fab fa-twitter"
							backgroundColor="#1DA1F2"
							fansCount="12,345"
							slug="https://twitter.com/Discoverpokhara?t=ivcEuW9lI0f0CQlhapj5"
						></SocialMediaCard>
						<!-- <SocialMediaCard
							logoClass="fab fa-reddit"
							backgroundColor="#FF4500"
							fansCount="12,345"
							slug="https://www.reddit.com/"
						></SocialMediaCard> -->
					</div>
				</div>
				<!-- Social Follow End-->

				<TagPagePopularNews tagName={data?.data?.title} tagSlug={data?.data?.slug} data={popular} />

				<!-- Ads Start -->
				<!-- <div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Advertisement</h4>
					</div>
					<div class="bg-white text-center border border-top-0 p-3">
						<a href="/"><img class="img-fluid" src="img/news-800x500-2.jpg" alt="" /></a>
					</div>
				</div> -->
				<!-- Ads End -->

				<!-- Newsletter Start -->
				<!-- <div class="mb-3">
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
				</div> -->
				<!-- Newsletter End -->

				<!-- Tags Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
					</div>
					<div class="bg-white border border-top-0 p-3">
						<Tags />
					</div>
				</div>
				<!-- Tags End -->
			</div>
		</div>
	</div>
</div>
<!-- News With Sidebar End -->
