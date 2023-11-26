import { useState } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload, //sirve para escuchar los cambios automaticamente en la pagina
    useRouteError,
    isRouteErrorResponse
} from '@remix-run/react'

import style from '~/style/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

//etiqueta meta en el html
export function meta(){
    return [
        {charset: 'utf-8'},
        {title: 'GuitarLA - remix'},
        {name: "viewport", content: "width=device-width, initial-scale=1"}
    ]
}


export function links(){
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@900&display=swap"
        },
        {
            rel: "stylesheet",
            href: style
        }
    ]
}

export default function App(){

    const [carrito, setCarrito] = useState([])
    const agregarCarrito = () =>{
        
    }
    return(
        <Document>
            <Outlet
                context={{
                     
                }}
            />
        </Document>
    )
}


function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>{/*sirve para evitar la recarga de la pagina al momento de dar a un enlace*/}
                <LiveReload/>
            </body>
        </html>
    )
}

//Manejo de errores

export function ErrorBoundary(){
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className='error'>
                    {error.status}<br/>{error.statusText}
                </p>
            </Document>
        )

    }
}
