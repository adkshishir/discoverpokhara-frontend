<script lang="ts">
    export let image = 'https://via.placeholder.com/110x110';
    export let category = 'Business';
    export let date = 'Jan 01, 2045';
    export let title = 'Lorem ipsum dolor sit amet elit';
    export let slug = 'news-1';
    </script>

<div title="{title}" class="d-flex align-items-center bg-white mb-3" style="height: 110px;">
    <img class="img-fluid" style="width: 110px; height: 110px;" src={image} alt="">
    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
        <div class="mb-2">
            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="/{slug}">{category}</a>
            <a class="text-body" href="/{slug}"><small>{date}</small></a>
        </div>
        <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="/{slug}">{title.slice(0, 30)}{title.length > 30 ? '...' : ''}</a>
    </div>
</div>