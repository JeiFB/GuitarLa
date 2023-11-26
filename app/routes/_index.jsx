import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import ListadoGuitarras from "~/components/listado-Guitarras"
import stylesGuitarras from "~/style/guitarras.css"
import stylePosts from "~/style/blog.css"
import ListadoPosts from "~/components/listado-post"
import Curso from "~/components/curso"
import stylesCurso from "~/style/curso.css"
export function meta(){

}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:stylesGuitarras
    },
    {
      rel:'stylesheet',
      href:stylePosts
    },
    {
      rel:'stylesheet',
      href:stylesCurso
    }
  ]
}

/*En este caso como vamos a tener dos funciones que se van a llamar
  getGuitarras y getPost, la sintaxis
  const guitarras = await getGuitarras()
  const post = await getPosts()
  si lo hacemos de esta forma, la funciones getPost
  tendria que esperar a que termine de hacer la consulta getGuitarras, para que pueda funcionar
  y lo mas logico es que cada una funcione de manera independiente ya que una no necesita de la otra
  por lo tanto usamos la siguiente sintaxis:
  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])
  de esta forma aseguramos que las dos funciones no dependas una de la otra
  Importante: hay casos en el que si necesitemos en los que una funcion dependa de otra, como por ejemplo
  cuando para mostrar el contenido de una pagina, necesitemos primero que el usuarios se autentique pora despues mostrar el contenido
*/
export async function loader(){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  return{
    guitarras: guitarras.data,
    posts:posts.data,
    curso: curso.data
  }
}

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras = {guitarras}
        />
      </main>
      <Curso
        curso ={curso.attributes}
      />
      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index