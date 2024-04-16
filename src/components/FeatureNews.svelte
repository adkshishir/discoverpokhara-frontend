 
 <script lang="ts">
export let data:any;
    </script>
 <!-- Featured News Slider Start -->
  <div class="container-fluid pt-5 mb-3">
    <div class="container">
        <div class="section-title">
            <h4 class="m-0 text-uppercase font-weight-bold">{data.name}</h4>
        </div>
        <div class="owl-carousel news-carousel carousel-item-4 position-relative">
            {#each data.posts as post}

            <div title="{post.title}" class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" alt="{post.title}" src={post.image} style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="/{post?.slug}">{data.name}</a>
                        <a class="text-white" href="/{post?.slug}"><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/{post?.slug}">{post.title?.slice(0, 30)}{post.title?.length > 30 ? '...' : ''}</a>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
<!-- Featured News Slider End -->