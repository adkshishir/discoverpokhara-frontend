<script lang="ts">
	import Services from "../common/Services.svelte";
	import TopHead from "../common/TopHead.svelte";
import BreakingNews from "../components/BreakingNews.svelte";
	import FeatureNews from "../components/FeatureNews.svelte";
    import MainNews from "../components/MainNews.svelte";
	import NewsWithSideBar from "../components/NewsWithSideBar.svelte";
  export let data;
</script>
<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<!-- <meta name="robots" content="index, follow" /> -->
	<title>Wander Pokhara</title>
	<meta name="title" content="Wander Pokhara" />
	<meta name="description" content="Explore with us . #Pokhara" />
	<meta name="keywords" content="Wander Pokhara, pokhara, Gandaki, Bindabasini, Fewa lake, World Peace pacoda, Nepal,thingstodoinpokhara, " />
	<meta name="twitter:card" content="We are Wander Pokhara. We helps you to Explore Pokhara"/>
    <meta name="twitter:site" content="@discoverpokhara" />
	<meta name="author" content="Wander Pokhara" />
	<meta property="og:title" content="Wander Pokhara" />
	<meta property="og:image" content="/logo1.webp" />
	<meta property="og:description" content="Wander Pokhara ,Explore with us " />
	<meta property="og:url" content="https://discoverpokhara.com" />
</svelte:head>

<MainNews data={data?.data?.recentPost}/>
<BreakingNews data={data?.data?.flashNews}/>
<Services data={data}/>

 <!-- <FeatureNews data={data.tags[2]}/> -->
 <!-- <NewsWithSideBar data={data.tags[3]} latest={data.latest} tags={tagNames} /> -->
 <!-- <Services/> -->

 

