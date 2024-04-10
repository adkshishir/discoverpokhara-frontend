import { CATEGORIES, POSTS, TAGS } from "$lib/const/api"
import type { PageLoad } from "./$types"
import getApi from "$lib/helper/get"
import { menu} from "$lib/store";
export async function load({ fetch }) {
    const categories = await getApi(CATEGORIES);
      menu.set(categories?.categories)
    const tags=await getApi(TAGS);
    let data={
        categories:categories.categories,
        tags:tags.tags, 
    }
    return data
}
