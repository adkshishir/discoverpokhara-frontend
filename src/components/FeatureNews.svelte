 
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

            <div class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" alt="{post.title}" src={post.image} style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="/{post.slug}">{data.name}</a>
                        <a class="text-white" href="/{post.slug}"><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/{post.slug}">{post.title}</a>
                </div>
            </div>
            {/each}
            <!-- <div class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" src="img/news-700x435-2.jpg" style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Business</a>
                        <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" src="img/news-700x435-3.jpg" style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Business</a>
                        <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" src="img/news-700x435-4.jpg" style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Business</a>
                        <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div class="position-relative overflow-hidden" style="height: 300px;">
                <img class="img-fluid h-100" src="img/news-700x435-5.jpg" style="object-fit: cover;">
                <div class="overlay">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Business</a>
                        <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div> -->
        </div>
    </div>
</div>
<!-- Featured News Slider End -->