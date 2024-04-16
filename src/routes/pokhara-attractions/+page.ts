import { CATEGORIES, TAGS } from '$lib/const/api.js'
import getApi from '$lib/helper/get.js'


export const load=async({ params,fetch,url}) => {
   
   const res=await fetch(`${CATEGORIES}${url.pathname}`)
     let data = await res.json()
      return data?.data
}