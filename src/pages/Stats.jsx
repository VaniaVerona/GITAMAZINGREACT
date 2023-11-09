import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layouts/Layout';
import Carrusel from '../components/Carrusel';
import Table from '../components/Table'; 

function Stats({ altexto, imagen, titulo }) {
  const eventos = useSelector((state) => state.eventos);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    const pastEvents = eventos.filter(event => event.assistance);
    setPastEventsData(pastEvents);
  }, [eventos]);

  return (
    <Layout>
      <Carrusel imagen={imagen} titulo={titulo} alt={altexto} />
      <Table eventsData={eventos} pastEventsData={pastEventsData} />
    </Layout>
  );
}

export default Stats;
