import { CATEGORIES, TAGS } from '$lib/const/api.js'
import getApi from '$lib/helper/get.js'


export const load=async({ params,fetch }) => {
    const category=await getApi(`${CATEGORIES}/${params.slug}`)
    const tags=await getApi(TAGS);
    let data={
        category:category.data.category,
        tags:tags.tags,
        seo:category.data.seo
    }
    return data
}