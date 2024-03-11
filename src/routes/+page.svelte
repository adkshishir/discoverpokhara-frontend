<script lang="ts">
	import { onMount } from "svelte";
	import BreakingNews from "../components/BreakingNews.svelte";
	import FeatureNews from "../components/FeatureNews.svelte";
    import MainNews from "../components/MainNews.svelte";
	import NewsWithSideBar from "../components/NewsWithSideBar.svelte";
	import CustomCarosuel from "../components/Carousels/CustomCarosuel.svelte";
   export let data;
   let tagNames:{name:string,slug:string}[]=[];
   tagNames = data.tags.map((tag:{name:string,slug:string}) => {return {name:tag.name,slug:tag.slug}});
   
</script>
<CustomCarosuel/>
 <MainNews data={data.tags[0]}/>
 <BreakingNews data={data.tags[1].posts}/>
 <FeatureNews data={data.tags[2]}/>
 <NewsWithSideBar data={data.tags[3]} latest={data.latest} tags={tagNames} />

 

