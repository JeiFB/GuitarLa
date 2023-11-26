const Curso = ({curso}) => {
    const {contenido, imagen, titulo} = curso
  return (
    <section className="curso">
      {/* se necesita usar la imagen de fondo, pero como no hay manera de una hoja de estilos de css
        pueda consumir una api, entonces usamos una herramienta propia de jsx para usar la imagen que viene de la api
        como fondo de esta senccion
  */}
       <style jsx="true">{`
        .curso{
              background-image:linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url})
            }
       `}</style>
        <div className="contenido curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso