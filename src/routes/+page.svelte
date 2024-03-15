<script lang="ts">
	import Services from "../common/Services.svelte";
import BreakingNews from "../components/BreakingNews.svelte";
	import FeatureNews from "../components/FeatureNews.svelte";
    import MainNews from "../components/MainNews.svelte";
	import NewsWithSideBar from "../components/NewsWithSideBar.svelte";
   export let data;
   let tagNames:{name:string,slug:string}[]=[];
   tagNames = data?.tags?.map((tag:{name:string,slug:string}) => {return {name:tag.name,slug:tag.slug}});

</script>
<svelte:head>
	<!-- <meta name="robots" content="noindex, nofollow" /> -->
	<!-- <meta name="robots" content="index, follow" /> -->
	<title>Discover Pokhara</title>
	<meta name="title" content="Discover Pokhara" />
	<meta name="description" content="Explore with us . #Pokhara" />
	<meta name="keywords" content="Discover Pokhara, pokhara, Gandaki, Bindabasini, Fewa lake, World Peace pacoda, Nepal,thingstodoinpokhara, " />
	<meta name="twitter:card" content="We are Discover Pokhara. We helps you to Explore Pokhara"/>
    <meta name="twitter:site" content="@discoverpokhara" />
	<meta name="author" content="Discover Pokhara" />
	<meta property="og:title" content="Discover Pokhara" />
	<meta property="og:image" content="/logo1.webp" />
	<meta property="og:description" content="Discover Pokhara ,Explore with us " />
	<meta property="og:url" content="https://discoverpokhara.com" />
</svelte:head>
<MainNews data={data.tags[0]}/>
<BreakingNews data={data.tags[1].posts}/>
 <!-- <FeatureNews data={data.tags[2]}/> -->
 <!-- <NewsWithSideBar data={data.tags[3]} latest={data.latest} tags={tagNames} /> -->
 <Services/>

 

