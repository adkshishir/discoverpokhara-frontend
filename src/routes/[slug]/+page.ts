import { POSTS } from '$lib/const/api.js'
import getApi from '$lib/helper/get.js'

export const load=async({ params,fetch }) => { 
    const data=await getApi(POSTS+`/${params.slug}`);
    console.log(data)
    return data.data
}