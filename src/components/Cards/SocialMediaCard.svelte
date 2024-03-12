<script lang="ts">
export let logoClass:string;
export let backgroundColor:string;
export let fansCount:string;
export let slug:string
</script>

<a href={slug} target="_blank" class="d-block w-100 text-white text-decoration-none mb-3" style="background: {backgroundColor};">
    <i class="{logoClass} text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
    <span class="font-weight-medium">{fansCount} Fans</span>
</a>