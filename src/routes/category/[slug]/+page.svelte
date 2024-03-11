<script lang="ts">
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

<!-- News With Sidebar Start -->
<div class="container-fluid mt-5 pt-3">
	<NewsWithSideBar data={data.category} latest={virtualData} tags={tagNames} />
</div>
<!-- News With Sidebar End -->
