import { CATEGORIES, LATEST, TAGS } from "$lib/const/api"
import type { PageLoad } from "./$types"
import getApi from "$lib/helper/get"
import { menu} from "$lib/store";
import { PUBLIC_FILE_PATH } from "$env/static/public";
export async function load({ fetch }) {
    const categories = await getApi(CATEGORIES);
      menu.set(categories?.categories)
    const tags=await getApi(TAGS);
    const latest=await getApi(LATEST);
    let data={
        categories:categories.categories,
        tags:tags.tags, 
        latest:latest
    }
    return data
}
