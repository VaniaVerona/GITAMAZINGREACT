import Layout from '../layouts/Layout'
import Formulario from '../components/Formulario'
import Carrusel from '../components/Carrusel'

function Contact({ imagen, titulo, altexto }) {
  return (
    <>
      <Layout>
      <Carrusel imagen={imagen} titulo={titulo} alt={altexto} />
        <Formulario/>
      </Layout>
      </>
  )
}

export default Contact