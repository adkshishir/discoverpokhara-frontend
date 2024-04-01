import { POSTS } from '$lib/const/api.js'
import getApi from '$lib/helper/get.js'

export const load=async({ url}) => { 
    const data=await getApi(POSTS+url.pathname);
    return data.data
}