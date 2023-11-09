import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carrusel from '../components/Carrusel';
import Checkbox from '../components/Checkbox';
import Search from '../components/Search';
import Card from '../components/Card';
import Layout from '../layouts/Layout';

function Home({ rutaActual, imagen, titulo, altexto }) {
  const eventos = useSelector((store) => store.eventos);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [noEventosEncontrados, setNoEventosEncontrados] = useState(false);

  useEffect(() => {
    if (rutaActual === 'upcoming') {
      const upcomingEvents = eventos.filter((evento) => evento.estimate !== undefined);
      setEventosFiltrados(upcomingEvents);
    } else if (rutaActual === 'past') {
      const pastEvents = eventos.filter((evento) => evento.assistance !== undefined);
      setEventosFiltrados(pastEvents);
    } else {
      setEventosFiltrados(eventos);
    }
    setLoading(false);
  }, [rutaActual, eventos]);

  const manejarCambioDeBusqueda = (textoBusqueda) => {
    setBusqueda(textoBusqueda);
    setNoEventosEncontrados(false); // Reiniciar la bandera al cambiar la búsqueda
  };

  const actualizarCategoriasSeleccionadas = (categoriasSeleccionadas) => {
    setCategoriasSeleccionadas(categoriasSeleccionadas);
  };

  const eventosAMostrar = eventosFiltrados.filter((evento) => {
    const categoriaMatch = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
    const busquedaMatch = evento.name.toLowerCase().includes(busqueda);
    return categoriaMatch && busquedaMatch;
  });

  const categoriasUnicas = [...new Set(eventosFiltrados.map((evento) => evento.category))];

  return (
    <>
      <Layout>
        <Carrusel imagen={imagen} titulo={titulo} alt={altexto} />
        <div className="container-fluid mt-5">
          <div className="row">
            <Checkbox onCategoryChange={actualizarCategoriasSeleccionadas} categorias={categoriasUnicas} />
            <Search onSearch={manejarCambioDeBusqueda} />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : eventosAMostrar.length > 0 ? (
          <section className="container py-3 mt-3">
            <div id="event-container" className="row g-4">
              {eventosAMostrar.map((evento) => (
                <Card
                  id={evento._id}
                  title={evento.name}
                  description={evento.description}
                  price={evento.price}
                  image={evento.image}
                />
              ))}
            </div>
          </section>
        ) : (
          <p className="texto-blanco">No se encontraron eventos que coincidan con la búsqueda.</p>
        )}
      </Layout>
    </>
  );
}

export default Home;
