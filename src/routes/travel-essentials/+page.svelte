<script lang="ts">
	import { FRONTEND_URL } from '$lib/const/api';
	import NewsWithSideBar from '../../components/NewsWithSideBar.svelte';
	export let data;
	let tagNames: { name: string; slug: string }[] = [];
  let virtualData = data.posts;
</script>
<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<!-- <meta name="robots" content="index, follow" /> -->
  <title>{data?.category?.title}</title>
  <meta name="title" content={data?.category?.seo?.meta_title} />
  <meta name="description" content={data?.category?.seo?.meta_description} />
  <meta name="keywords" content={data?.category?.seo?.meta_keywords} />
  <script type="application/ld+json">
  {data?.category?.seo?.schema}
  </script>
  <!-- <meta name="revisit-after" content="1 days" /> -->
  <!-- og graps and tags -->
  <meta property="og:title" content={data?.category?.seo?.meta_title} />
  <meta property="og:description" content={data?.category?.seo?.meta_description} />
  <meta property="og:image" content={data?.category?.image} />
  <meta property="og:url" content='{FRONTEND_URL}/{data?.category?.slug}' />
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@discoverpokhara" />

</svelte:head>
<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<NewsWithSideBar data={data.category} latest={data?.posts} popular={data?.popular}  />
</div>
<!-- News With Sidebar End -->
