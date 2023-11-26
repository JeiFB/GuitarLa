export async function getPosts(){
    const respuesta  =  await fetch(`${process.env.API_URL}/posts?populate=imagen`)// cambie "localhost" por la direccion ip, me estaba dando problemas
    return await respuesta.json()
}


export async function getPost(url){
    //usando la url, te ayuda a filtrar
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}