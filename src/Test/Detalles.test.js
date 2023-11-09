import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Detalles from '../components/Detalles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

describe('Detalles', () => {
  test('muestra los detalles del evento', async () => {
    const mostrarEvent = {
      _id: '1',
      name: 'Evento de prueba',
      description: 'Este es un evento de prueba',
      date: '2023-11-03',
      category: 'Categoría de prueba',
      place: 'Lugar de prueba',
      capacity: 100,
      price: 50,
      estimate: 'Estimación de prueba',
    };

    render(
      <Router>
        <Detalles event={mostrarEvent} />;
      </Router>
    )

    expect(screen.getByText('Evento de prueba')).toBeInTheDocument();
    expect(screen.getByText('Este es un evento de prueba')).toBeInTheDocument();
    const dateElement = await screen.findByText('Date:');
    expect(dateElement).toBeInTheDocument();
    const dateValueElement = await screen.findByText('2023-11-03');
    expect(dateValueElement).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
    expect(screen.getByText('Categoría de prueba')).toBeInTheDocument();
    expect(screen.getByText('Place:')).toBeInTheDocument();
    expect(screen.getByText('Lugar de prueba')).toBeInTheDocument();
    expect(screen.getByText('Capacity:')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Price:')).toBeInTheDocument();
    expect(screen.getByText('$50')).toBeInTheDocument();
    expect(screen.getByText('Estimate:')).toBeInTheDocument();
    expect(screen.getByText('Estimación de prueba')).toBeInTheDocument();
  });
});
