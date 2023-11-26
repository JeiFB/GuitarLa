import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/style/blog.css"

export async function loader({params}){
    const {postUrl} = params;
    const post = await getPost(postUrl);
    if(post.data.length === 0){
        throw new Response('', {
            status:404,
            statusText: 'Blog no encontrado'
        })
    }
    return post;
}


export function links(){
    return([
         {
            rel:'stylesheet',
            href:styles
        }
    ]  
    )
}


export function meta({data}){
    return [
        {title:`guitarLA - ${data.data[0].attributes.titulo}`},
        {description: `Guitarras, Blogs, blog${data.data[0].attributes.titulo}`}
    ]
}



const  Posts = () => {
    const post = useLoaderData();
    const {titulo,contenido, imagen, publishedAt} = post.data[0].attributes
  return (
    <article className="contenedor post">
        <img className="imagen mt-3" src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Posts