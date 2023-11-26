import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-post"
import styles from "~/style/blog.css"


export function links(){
  return(
    {
      rel:'stylesheet',
      href:styles
    }
  )
}

export function meta(){
  return[
    {title:'GuitarLA - Blogs'},
    {descriptions:'Blogs de guitarras'}
  ]
}
export async function loader(){
  const posts =  await getPosts()
  return posts.data
}

const Blog = () => {
  //el useLoaderData siempre se usa para obtener lo que retorna el loader
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default Blog