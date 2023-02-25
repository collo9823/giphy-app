export const getGifs = async(cat)=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=wTNi3R6astguhEuJYCAYXypOSNezEhbK&q=${cat}&limit=10&rating=r`;

    const resp = await fetch(URL);
    const {data} = await resp.json();
    
    const gifs = data.map(img=>({
        id:img.id,
        title: img.title,
        src: img.images.downsized_medium.url
    }))
    
    console.log(gifs);
    return gifs;


}