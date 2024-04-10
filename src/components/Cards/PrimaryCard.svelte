
<script lang="ts">
 export let image:string;
 export let category:string;
 export let date:string;
 export let title:string;
 export let className:string|null = null;
 export let slug:string;
</script>


<div class="col-md-6 px-0 {className}">
    <div class="position-relative overflow-hidden" style="height: 250px;">
        <img class="img-fluid w-100 h-100" src={image} alt='news' style="object-fit: cover;">
        <div class="overlay">
            <div class="mb-2">
                <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href={slug}>{category}</a>
                <a class="text-white" href={slug}><small>{date}</small></a>
            </div>
            <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href={slug}>{title}</a>
        </div>
    </div>
</div>