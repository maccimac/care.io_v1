export const getHtml = async (url) =>{
    const res = await fetch(url);
    const htmlContent = await res.text()
    return htmlContent;
}