<script lang="ts">
	import { FRONTEND_URL } from '$lib/const/api';
	import NewsWithSideBar from '../../../components/NewsWithSideBar.svelte';
	export let data;
	let tagNames: { name: string; slug: string }[] = [];
	tagNames = data.tags.map((tag: { name: string; slug: string }) => {
		return { name: tag.name, slug: tag.slug };
	});
	let virtualData = {
		posts: {
			data: data.category.posts
		}
	};
</script>
<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<!-- <meta name="robots" content="index, follow" /> -->
  <title>{data?.tags?.name}</title>
  <meta name="title" content={data?.tags?.name} />
  <meta name="description" content={data?.seo?.description} />
  <meta name="keywords" content={data?.seo?.keywords} />
  <script type="application/ld+json">
  {data?.seo?.schema}
  </script>
  <!-- <meta name="revisit-after" content="1 days" /> -->
  <!-- og graps and tags -->
  <meta property="og:title" content={data?.seo?.title} />
  <meta property="og:description" content={data?.seo?.description} />
  <meta property="og:image" content={data?.category?.image} />
  <meta property="og:url" content='{FRONTEND_URL}/{data?.tags?.slug}' />
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@discoverpokhara" />
  
</svelte:head>

<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<NewsWithSideBar data={data.category} latest={virtualData}  />
</div>
<!-- News With Sidebar End -->
