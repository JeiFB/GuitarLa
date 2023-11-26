import { Link, useLocation } from "@remix-run/react"
import imagenCarrito from "../../public/img/carrito.png"
const Navegacion = () => {
    //el use location lo voy a usar para resaltar la pagina en los botones de navegacion
    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link
        to='/'
        className={location.pathname === '/' ? 'active' : ''}
        >Inicio
        </Link>
        <Link
        to='/nosotros'
        className={location.pathname === '/nosotros' ? 'active' : ''}
        >Nosotros
        </Link>
        <Link
        to='/blog'
        className={location.pathname === '/blog' ? 'active' : ''}
        >Blogs
        </Link>
        <Link
        to='/tienda'
        className={location.pathname === '/tienda' ? 'active' : ''}
        >Tienda
        </Link>
        <Link
          to='/carrito'
        >
          <img src={imagenCarrito} alt="carrito" />
        </Link>
    </nav>
  )
}

export default Navegacion