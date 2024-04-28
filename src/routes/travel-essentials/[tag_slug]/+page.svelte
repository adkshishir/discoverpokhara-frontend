<script lang="ts">
	import TagPage from '../../../components/TagPage.svelte';
	export let data;
</script>

<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<TagPage seo={data?.tag?.seo} data={data.tag} latest={data?.posts} popular={data?.popular}  />
</div>
<!-- News With Sidebar End -->
