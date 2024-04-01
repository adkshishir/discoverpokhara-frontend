import { CATEGORIES,HOME, TAGS } from "$lib/const/api"
import type { PageLoad } from "./$types"
import getApi from "$lib/helper/get"
import { menu} from "$lib/store";

export async function load({ fetch }) {
    const data = await getApi(HOME)
    const categories =await getApi(CATEGORIES)
    return {...data,categories:categories?.categories}
}
