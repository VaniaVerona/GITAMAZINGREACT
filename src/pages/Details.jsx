import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import Detalles from '../components/Detalles';

function Details() {
  const { id } = useParams();
  const eventos = useSelector((state) => state.eventos);
  const event = eventos.find((evento) => evento._id == id);

  return (
    <Layout>
      {event ? (
        <Detalles event={event} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default Details;
