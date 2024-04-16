<script lang="ts">
	
	import { FRONTEND_URL } from '$lib/const/api';

	export let data: any;
	console.log(data,"slug............")
</script>

<!-- Footer Start -->
<div class="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
	<div class="row py-4">
		<div class="col-lg-3 col-md-6 mb-5">
			<h5 class="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
			<p class="font-weight-medium"><i class="fa fa-map-marker-alt mr-2"></i>Pokhara, Nepal</p>
			<p class="font-weight-medium"><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
			<p class="font-weight-medium"><i class="fa fa-envelope mr-2"></i>info@wanderpokhara.com</p>
			<h6 class="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
			<div class="d-flex justify-content-start">
				<a
					class="btn btn-lg btn-secondary btn-lg-square mr-2"
					href="https://twitter.com/Discoverpokhara?t=ivcEuW9lI0f0CQlhapj5"
					><i title="Twitter" class="fab fa-twitter"></i></a
				>
				<a
					class="btn btn-lg btn-secondary btn-lg-square mr-2"
					href="https://www.facebook.com/profile.php?id=61557240062151"
					><i title="Facebook" class="fab fa-facebook-f"></i></a
				>
				<a class="btn btn-lg btn-secondary btn-lg-square mr-2" href="/"
					><i title="Linkedin" class="fab fa-linkedin-in"></i></a
				>
				<a class="btn btn-lg btn-secondary btn-lg-square mr-2" href="/"
					><i title="Instagram" class="fab fa-instagram"></i></a
				>
				<a class="btn btn-lg btn-secondary btn-lg-square mr-2" href="/"
					><i title="Reddit" class="fab fa-reddit"></i></a
				>
			</div>
		</div>
		<div class="col-lg-3 col-md-6 mb-5">
			<h5 class="mb-4 text-white text-uppercase font-weight-bold">Adventure</h5>
			{#if data?.categories?.length > 0}
				{#each data?.categories[1].posts as post, index}
					{#if index < 3}
						<div class="mb-3">
							<div class="mb-2">
								<a
									data-sveltekit-reload
									class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
									href="{FRONTEND_URL}/category/{data?.categories[1]?.slug}"
									>{data?.categories[1]?.title}</a
								>
								<!-- <a data-sveltekit-reload class="text-body" href="{FRONTEND_URL}/{post?.slug}"
									>
									<small>Jan 01, 2045</small>
									</a
								> -->
							</div>
							<a
								data-sveltekit-reload
								class="small text-body text-uppercase font-weight-medium"
								href="{FRONTEND_URL}/{data?.categories[1]?.slug}/{post?.slug}">{post?.title}</a
							>
						</div>
					{/if}
				{/each}
			{/if}
		</div>
		<div class="col-lg-3 col-md-6 mb-5">
			<h5 class="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
			<div class="m-n1">
				{#if data?.categories?.length > 0}
					{#each data?.categories as tag}
						<a
							data-sveltekit-reload
							href={`${FRONTEND_URL}/${tag?.slug}`}
							class="btn btn-sm btn-secondary m-1">{tag?.title}</a
						>
					{/each}
				{/if}
			</div>
		</div>
		<div class="col-lg-3 col-md-6 mb-5">
			<h5 class="mb-4 text-white text-uppercase font-weight-bold">Photo Collection</h5>
			<!-- <div class="row">
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-1.jpg" alt=""></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-2.jpg" alt=""></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-3.jpg" alt=""></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-4.jpg" alt=""></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-5.jpg" alt=""></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href=""><img class="w-100" src="img/news-110x110-1.jpg" alt=""></a>
                    </div>
                </div> -->
		</div>
	</div>
</div>
<div class="container-fluid py-4 px-sm-3 px-md-5" style="background: #111111;">
	<p class="m-0 text-center">
		&copy; <a data-sveltekit-reload href="https://discoverpokhara.com">Wander Pokhara</a>. All
		Rights Reserved.
	</p>
</div>
<!-- Footer End -->

<!-- Back to Top -->
<a href="#top" class="btn btn-primary btn-square back-to-top"><i class="fa fa-arrow-up"></i></a>
