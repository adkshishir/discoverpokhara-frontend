<script lang="ts">
	import NewsWithSideBar from '../../components/NewsWithSideBar.svelte';
	export let data;
</script>

<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<NewsWithSideBar data={data.category} latest={data?.posts} popular={data?.popular} />
</div>
<!-- News With Sidebar End -->
