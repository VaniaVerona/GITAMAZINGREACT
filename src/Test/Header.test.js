import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('debería renderizar el componente Header correctamente', () => {
    
    render(
      <Router>
        <Header/>
      </Router>
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument(); // Verifica que el logo se renderiza correctamente
    expect(screen.getByText('HOME')).toBeInTheDocument(); // Verifica que el enlace a HOME se renderiza correctamente
    expect(screen.getByText('UPCOMING EVENTS')).toBeInTheDocument(); // Verifica que el enlace a UPCOMING EVENTS se renderiza correctamente
    expect(screen.getByText('PAST EVENTS')).toBeInTheDocument(); // Verifica que el enlace a PAST EVENTS se renderiza correctamente
    expect(screen.getByText('CONTACT')).toBeInTheDocument(); // Verifica que el enlace a CONTACT se renderiza correctamente
    expect(screen.getByText('STATS')).toBeInTheDocument(); // Verifica que el enlace a STATS se renderiza correctamente
  });
});
