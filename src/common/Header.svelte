<script lang="ts">
	import { CATEGORIES } from '$lib/const/api';
	import getApi from '$lib/helper/get';
	import { onMount } from 'svelte';
	let categories: any;
	onMount(async () => {
		let data = await getApi(CATEGORIES);
		categories = data.categories;
	});
</script>

<!-- Topbar Start -->
<div class="container-fluid d-none d-lg-block" id="top">
	<div class="row align-items-center bg-dark px-lg-5">
		<div class="col-lg-9">
			<nav class="navbar navbar-expand-sm bg-dark p-0">
				<ul class="navbar-nav ml-n2">
					<li class="nav-item border-right border-secondary">
						<a class="nav-link text-body small" href="/"
							>{new Date().getFullYear()} / {new Date().getMonth()} / {new Date().getDay()}</a
						>
					</li>
					<li class="nav-item border-right border-secondary">
						<a class="nav-link text-body small" href="/advertise">Advertise</a>
					</li>
					<li class="nav-item border-right border-secondary">
						<a class="nav-link text-body small" href="/contact">Contact</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body small" href="/login">Login</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="col-lg-3 text-right d-none d-md-block">
			<nav class="navbar navbar-expand-sm bg-dark p-0">
				<ul class="navbar-nav ml-auto mr-n2">
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="https://twitter.com/Discoverpokhara?t=ivcEuW9lI0f0CQlhapj5"><small class="fab fa-twitter"></small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="https://www.facebook.com/profile.php?id=61557240062151"><small class="fab fa-facebook-f"></small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="/"><small class="fab fa-linkedin-in"></small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="/"><small class="fab fa-instagram"></small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="/"><small class="fab fa-google-plus-g"></small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-body" target="_blank" href="/"><small class="fab fa-youtube"></small></a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	<div class="row align-items-center bg-white py-3 px-lg-5">
		<div class="col-lg-4">
			<a href="/" data-sveltekit-reload class="navbar-brand p-0 d-none d-lg-block">
				<h1 class="m-0 display-4 text-uppercase text-primary">
					Discover <span class="text-secondary font-weight-normal">Pokhara</span>
				</h1>
			</a>
		</div>
		<!-- <div class="col-lg-8 text-center text-lg-right">
            <a href="https://htmlcodex.com"><img class="img-fluid" src="img/ads-728x90.png" alt=""></a>
        </div> -->
	</div>
</div>
<!-- Topbar End -->

<!-- Navbar Start -->
<div class="container-fluid p-0">
	<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
		<a data-sveltekit-reload href="/" class="navbar-brand d-block d-lg-none">
			<h1 class="m-0 display-4 text-uppercase text-primary">
				Discover <span class="text-white font-weight-normal">Pkr</span>
				<!-- <span class="w-50"><img class="img-fluid w-50" src="/logo.webp" alt="Discover Pokhara" /></span> -->
			</h1>
		</a>
		<button
			type="button"
			class="navbar-toggler"
			data-toggle="collapse"
			data-target="#navbarCollapse"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
			<div class="navbar-nav mr-auto py-0">
                <!-- <a href="/" data-sveltekit-reload class="nav-item nav-link active">Home</a> -->
				{#if categories != null}
					{#each categories as category,index}
					{#if index<=6}
						<div class="nav-item dropdown">
							<a href="#top"  class="nav-link dropdown-toggle" data-toggle="dropdown">{category.name}</a>
							<div class="dropdown-menu rounded-0 m-0" style="max-height: 300px;overflow-y: auto">
								{#each category.posts as post}
									<a href="/{post.slug}" data-sveltekit-reload class="dropdown-item">{post.title}</a>
								{/each}
							</div>
						</div>
						{/if}
					{/each}
				{/if}
				<!-- <a href="contact.html" class="nav-item nav-link">Contact</a> -->
			</div>
			<div class="input-group ml-auto d-none d-lg-flex" style="width: 100%; max-width: 300px;">
				<input type="text" class="form-control border-0" placeholder="Keyword" />
				<div class="input-group-append">
					<button class="input-group-text bg-primary text-dark border-0 px-3"
						><i class="fa fa-search"></i></button
					>
				</div>
				
				<button class="ml-2 input-group-text bg-primary text-dark border-0 px-3"
							><i class="fa fa-phone"></i></button
						>
			</div>
		</div>
	</nav>
</div>
<!-- Navbar End -->

<style>
    .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
}
</style>