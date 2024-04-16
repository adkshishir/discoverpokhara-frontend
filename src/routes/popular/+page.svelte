<script lang="ts">
	import {FRONTEND_URL} from '$lib/const/api';
    import SocialMediaCard from '../../components/Cards/SocialMediaCard.svelte';
	import Tags from '../../components/Tags.svelte';
	export let data;
	
</script>
  <svelte:head>
	  <meta name="robots" content="noindex, nofollow" />
	  <!-- <meta name="robots" content="index, follow" /> -->
	<title>{data?.post?.title}</title>
	<meta name="description" content={data?.seo?.description} />
	<meta name="keywords" content={data?.seo?.keywords} />
	<meta name="author" content={data?.author?.name} />
	<script type="application/ld+json">
    {data?.seo?.schema}
	</script>
	<!-- <meta name="revisit-after" content="1 days" /> -->
	<!-- og graps and tags -->
	<meta property="og:title" content={data?.seo?.title} />
	<meta property="og:description" content={data?.seo?.description} />
	<meta property="og:image" content={data?.post?.image} />
	<meta property="og:url" content='{FRONTEND_URL}/{data?.post?.slug}' />
	<meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@discoverpokhara" />
	
  </svelte:head>



<!-- Breaking News Start -->
<div class="container-fluid mt-5 mb-3 pt-3">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-12">
				<div class="d-flex justify-content-between">
					<div class="section-title border-right-0 mb-0" style="width: 180px;">
						<h4 class="m-0 text-uppercase font-weight-bold">Popular</h4>
					</div>
					<div
						class="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center bg-white border border-left-0"
						style="width: calc(100% - 180px); padding-right: 100px;"
					>
				      	{#each data?.relatedPost as relatedPost}
						<div class="text-truncate">
							<a class="text-secondary text-uppercase font-weight-semi-bold" href="/{relatedpost?.slug}">
								{relatedPost.title}</a
							>
						</div>
					{/each}
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Breaking News End -->

<!-- News With Sidebar Start -->
<div class="container-fluid">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<!-- News Detail Start -->
				<div class="position-relative mb-3">
					<img
						class="img-fluid w-100"
						src={data?.post?.image}
						alt={data?.post?.title}
						style="object-fit: cover;"
					/>
					<div class="bg-white border border-top-0 p-4">
						<div class="mb-3">
							<a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/"
								>Business</a
							>
							<a class="text-body" href="/">Jan 01, 2045</a>
						</div>
						<h1 class="mb-3 text-secondary text-uppercase font-weight-bold">
							{data.post.title}
						</h1>
						{@html data.post.content}
					
					</div>
					<div class="d-flex justify-content-between bg-white border border-top-0 p-4">
						<!-- <div class="d-flex align-items-center">
							<img class="rounded-circle mr-2" src="http:placeholder.com/100x100" width="25" height="25" alt="" />
							<span>John Doe</span>
						</div>
						<div class="d-flex align-items-center">
							<span class="ml-3"><i class="far fa-eye mr-2"></i>12345</span>
							<span class="ml-3"><i class="far fa-comment mr-2"></i>123</span>
						</div> -->
					</div>
				</div>
				<!-- News Detail End -->

				<!-- Comment List Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">3 Comments</h4>
					</div>
					<div class="bg-white border border-top-0 p-4">
						<div class="media mb-4">
							<img
								src="https://htmlcodex.com/typeracer/assets/http:placeholder.com/100x100"
								alt="user"
								class="img-fluid mr-3 mt-1"
								style="width: 45px;"
							/>
							<div class="media-body">
								<h6>
									<a class="text-secondary font-weight-bold" href="/">John Doe</a>
									<small><i>01 Jan 2045</i></small>
								</h6>
								<p>
									Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
									accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
								</p>
								<button class="btn btn-sm btn-outline-secondary">Reply</button>
							</div>
						</div>
						<div class="media">
							<img
								src="http:placeholder.com/100x100"
								alt="user"
								class="img-fluid mr-3 mt-1"
								style="width: 45px;"
							/>
							<div class="media-body">
								<h6>
									<a class="text-secondary font-weight-bold" href="/">John Doe</a>
									<small><i>01 Jan 2045</i></small>
								</h6>
								<p>
									Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
									accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
								</p>
								<button class="btn btn-sm btn-outline-secondary">Reply</button>
								<div class="media mt-4">
									<img
										src="http:placeholder.com/100x100"
										alt="user"
										class="img-fluid mr-3 mt-1"
										style="width: 45px;"
									/>
									<div class="media-body">
										<h6>
											<a class="text-secondary font-weight-bold" href="/">John Doe</a>
											<small><i>01 Jan 2045</i></small>
										</h6>
										<p>
											Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
											labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
											eirmod ipsum.
										</p>
										<button class="btn btn-sm btn-outline-secondary">Reply</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Comment List End -->

				<!-- Comment Form Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Leave a comment</h4>
					</div>
					<div class="bg-white border border-top-0 p-4">
						<form>
							<div class="form-row">
								<div class="col-sm-6">
									<div class="form-group">
										<label for="name">Name *</label>
										<input type="text" class="form-control" id="name" />
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label for="email">Email *</label>
										<input type="email" class="form-control" id="email" />
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="website">Website</label>
								<input type="url" class="form-control" id="website" />
							</div>

							<div class="form-group">
								<label for="message">Message *</label>
								<textarea id="message" cols="30" rows="5" class="form-control"></textarea>
							</div>
							<div class="form-group mb-0">
								<input
									type="submit"
									value="Leave a comment"
									class="btn btn-primary font-weight-semi-bold py-2 px-3"
								/>
							</div>
						</form>
					</div>
				</div>
				<!-- Comment Form End -->
			</div>

			<div class="col-lg-4">
				<!-- Social Follow Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
					</div>
					<div class="bg-white border border-top-0 p-3">
                        <SocialMediaCard logoClass="fab fa-facebook-f" backgroundColor="#39569C" fansCount="12,345" slug="https://www.facebook.com/profile.php?id=61557240062151"></SocialMediaCard>
                            <SocialMediaCard logoClass="fab fa-instagram" backgroundColor="#C8359D" fansCount="12,345" slug="https://www.instagram.com/"></SocialMediaCard>
                            <SocialMediaCard logoClass="fab fa-linkedin-in" backgroundColor="#0185AE" fansCount="12,345" slug="https://www.linkedin.com/"></SocialMediaCard>
                            <SocialMediaCard logoClass='fab fa-twitter' backgroundColor="#1DA1F2" fansCount="12,345" slug="https://twitter.com/Discoverpokhara?t=ivcEuW9lI0f0CQlhapj5"></SocialMediaCard>                     
                            <SocialMediaCard logoClass="fab fa-pinterest" backgroundColor="#BD081B" fansCount="12,345" slug="https://www.pinterest.com/"></SocialMediaCard>
                           <SocialMediaCard logoClass="fab fa-vimeo-v" backgroundColor="#055570" fansCount="12,345" slug="https://www.vimeo.com/"></SocialMediaCard>
					</div>
				</div>
				<!-- Social Follow End -->

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

				<!-- Popular News Start -->
				<div class="mb-3">
					<div class="section-title mb-0">
						<h4 class="m-0 text-uppercase font-weight-bold">Related</h4>
					</div>
					<div class="bg-white border border-top-0 p-3">
                        {#each data.relatedPost as relatedPost}
						<div class="d-flex align-items-center bg-white mb-3" style="height: 110px;">
							<img class="img-fluid " style="max-width: 110px;height: 110px;object-fit:cover" src={relatedPost.image} alt="" />
							<div
								class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0"
							>
								<div class="mb-2">
									<a
										class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
										href="/{relatedpost?.slug}">Business</a
									>
									<a class="text-body" href="/{relatedpost?.slug}"><small>Jan 01, 2045</small></a>
								</div>
								<a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="/{relatedpost?.slug}"
									>{relatedPost.title}</a
								>
							</div>
						</div>
                        {/each}
					</div>
				</div>
				<!-- Popular News End -->

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
						<Tags/>
					</div>
				</div>
				<!-- Tags End -->
			</div>
		</div>
	</div>
</div>
<!-- News With Sidebar End -->
