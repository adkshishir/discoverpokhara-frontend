<script lang="ts">
	import { FRONTEND_URL } from '$lib/const/api';
	import NewsWithSideBar from '../../../components/NewsWithSideBar.svelte';
	import TagPage from '../../../components/TagPage.svelte';
	export let data;
	let tagNames: { name: string; slug: string }[] = [];
     let virtualData = data.posts;
</script>
<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<!-- <meta name="robots" content="index, follow" /> -->
  <title>{data?.tag?.name}</title>
  <meta name="title" content={data?.tag?.seo?.meta_title} />
  <meta name="description" content={data?.tag?.seo?.meta_description} />
  <meta name="keywords" content={data?.tag?.seo?.meta_keywords} />
  <script type="application/ld+json">
  {data?.tag?.seo?.schema}
  </script>
  <!-- <meta name="revisit-after" content="1 days" /> -->
  <!-- og graps and tags -->
  <meta property="og:title" content={data?.tag?.seo?.meta_title} />
  <meta property="og:description" content={data?.tag?.seo?.meta_description} />
  <meta property="og:image" content={data?.tag?.image} />
  <meta property="og:url" content='{FRONTEND_URL}/{data?.tag?.slug}' />
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@discoverpokhara" />

</svelte:head>
<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<TagPage data={data.tag} latest={data?.posts} popular={data?.popular}  />
</div>
<!-- News With Sidebar End -->
