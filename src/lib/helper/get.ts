
async function getApi(url:string)
{
    try{
        const response=await fetch(url);
        const data=await response.json();
        return data
    }
    catch(err){
        let data;
        return  data={
            success:false,
            
            error:err
        }
    }
}
export default getApi