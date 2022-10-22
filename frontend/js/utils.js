export const getHtml = async (url) =>{
    let htmlContent;
    try{
        const res = await fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: {
                // 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                // 'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            }
        });
        // console.log(res)
        htmlContent = await res.text()
    } catch(err){
        console.log(err)
        htmlContent = false;
    } finally {
        return htmlContent;
    }
    
}