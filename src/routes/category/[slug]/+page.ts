import { CATEGORIES } from '$lib/const/api.js'
import getApi from '$lib/helper/get.js'


export const load=async({ params,fetch }) => {
    const data=await getApi(`${CATEGORIES}/sit-dolore-vel-beatae-sint-voluptatem-in-pariatur`)
    
    return data.data
}