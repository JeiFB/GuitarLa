import imagen from '../../public/img/nosotros.jpg'
import styles from '~/style/nosotros.css'

export function meta(){
  return [
      {title: 'GuitarLA - Nosotros'},
      {description:'Venta de guitarras, blog musica'}//sirve para el ceo
  ]
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel: 'preload', //le dice al mavegador que cargue de inmediato la imagen
      href: ' imagen',
      as:'image'
    }
  ]
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={imagen} alt="imagen nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae necessitatibus perspiciatis pariatur, eius fuga aut neque animi ratione modi, recusandae fugiat in possimus at unde repellat asperiores alias veritatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at neque deleniti repudiandae saepe modi ratione non unde eum impedit eius quod doloribus eligendi, aperiam possimus alias tenetur dolore? Soluta!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros