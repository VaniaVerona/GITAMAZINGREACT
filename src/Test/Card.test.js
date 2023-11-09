import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../components/Card';
import '@testing-library/jest-dom';

describe('Card', () => {

  const event = {
    id: '1',
    title: 'Evento de prueba',
    description: 'Este es un evento de prueba',
    price: 10,
    image: 'image.jpg',
  };
  
  test('debería renderizar el enlace de detalles correctamente', () => {
   
    render(
      <Router>
        <Card {...event} />
      </Router>
    );

    const linkElement = screen.getByText('Details');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/details/1');
  });

  test('debería renderizar el componente Card correctamente', () => {
     
    render(
      <Router>
        <Card {...event} />
      </Router>
    );
  
    expect(screen.getByText('Evento de prueba')).toBeInTheDocument();
    expect(screen.getByText('Este es un evento de prueba')).toBeInTheDocument();
    expect(screen.getByText('Price: $10')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Evento de prueba/i })).toBeInTheDocument(); // Esta línea verifica que la imagen se renderiza correctamente
  });
  
});

