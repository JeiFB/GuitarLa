import {useState} from 'react'
import { useLoaderData } from "@remix-run/react"
import { getGuitarra} from "~/models/guitarras.server"
import styles from "~/style/guitarras.css"


export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  if(guitarra.data.length === 0){
    throw new Response('',{
      status:404,
      statusText:'Guitarra no encontrada'
    })
  }
  return guitarra
}


//data funciona con el loader, es decir que lo que retorne loade data lo tendra disponible
export function meta({data}){
  return([
    {title:`GuitarLA - ${data.data[0].attributes.nombre}`},
    {description:`Guitarras, venta de guitarras, guitarra${data.data[0].attributes.nombre}`}
  ]

    )
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles

    }
  ]
}

const Guitarra = () => {
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData();
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    const handleSubmit = e => {
      e.preventDefault();
      if(cantidad < 1){
        alert('Debes seleccionar al menos 1');
        return
      }
      //consejo: Trata de hacer lo posible por no hacer tanto llamados a la api
      const guitarraSeleccionada = {
        id:guitarra.data[0].id,
        imagen: imagen.data.attributes.url,
        //se pone solo uno porque tanto la clave y el valor tienen el mismo nombre de variable
        nombre,
        precio,
        cantidad
      }

      console.log(guitarraSeleccionada)
    }
    return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra${nombre}`} />

      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className='precio'>${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad </label>
          <select id="cantidad"
            onChange={e => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <input type="submit" 
              value="Añadir al carrito"
            />
        </form>


      </div>
    </main>
  )
}

export default Guitarra