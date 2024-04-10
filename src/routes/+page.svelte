<script>
	import { onMount } from "svelte";
	import BreakingNews from "../components/BreakingNews.svelte";
	import FeatureNews from "../components/FeatureNews.svelte";
    import MainNews from "../components/MainNews.svelte";
	import NewsWithSideBar from "../components/NewsWithSideBar.svelte";
   export let data;
   console.log(data.tags)
</script>

 <MainNews data={data.tags[0]}/>
 <BreakingNews data={[{title:"hello"},{title:"hello one"},{title:"hello two"}]}/>
 <FeatureNews/>
 <NewsWithSideBar/>
