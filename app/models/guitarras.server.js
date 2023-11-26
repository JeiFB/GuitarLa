export async function getGuitarras(){
    const respuesta  =  await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)// cambie "localhost" por la direccion ip, me estaba dando problemas
    return await respuesta.json()
}


//funcion para filtrar las guitarras
export async function getGuitarra(url){
    //usando la url, te ayuda a filtrar
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}