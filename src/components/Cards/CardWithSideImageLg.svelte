<script lang="ts">
export let image = 'https://via.placeholder.com/700x435';
export let category='Business';
export let date='Jan 01, 2045';
export let title='Lorem ipsum dolor sit amet elit';
export let slug='news-1';
export let description='Lorem ipsum dolor sit amet elit';
export let authorName='Shishir Adhikari';
export let authorImage='https://via.placeholder.com/25x25';
export let comments=0;
export let views=0;

</script>
<div class="col-lg-12">
    <div class="row news-lg mx-0 mb-3">
        <div class="col-md-6 h-100 px-0">
            <img class="img-fluid h-100" src={image} alt="" style="object-fit: cover;">
        </div>
        <div class="col-md-6 d-flex flex-column border bg-white h-100 px-0">
            <div class="mt-auto p-4">
                <div class="mb-2">
                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="/{slug}">{category}</a>
                    <a class="text-body" href="/{slug}"><small>{date}</small></a>
                </div>
                <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="/{slug}">
                    {title}</a>
                <p class="m-0">{description}</p>
            </div>
            <div class="d-flex justify-content-between bg-white border-top mt-auto p-4">
                <div class="d-flex align-items-center">
                    <img class="rounded-circle mr-2" src={authorImage} width="25" height="25" alt="">
                    <small>{authorName}</small>
                </div>
                <div class="d-flex align-items-center">
                    <small class="ml-3"><i class="far fa-eye mr-2"></i>{views}</small>
                    <small class="ml-3"><i class="far fa-comment mr-2"></i>{comments}</small>
                </div>
            </div>
        </div>
    </div>
</div>