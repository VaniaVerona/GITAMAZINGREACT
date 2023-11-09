import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Carrusel from '../components/Carrusel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Carrusel', () => {

    test('debería renderizar el componente Carrusel correctamente', () => {
        const imagen = './src/assets/img/1.jpg'; 
        const titulo = 'HOME';
        const alt = 'People releasing floating lanterns into the night sky.';
    
        render(
          <Router>
        <Carrusel imagen={imagen} titulo={titulo} alt={alt} />
        </Router>
        );
    
        const imagenElement = screen.getByAltText(alt);
        expect(imagenElement).toBeInTheDocument();
        expect(imagenElement).toHaveAttribute('src', imagen);
    
        const tituloElement = screen.getByText(titulo);
        expect(tituloElement).toBeInTheDocument();
      }); 

      test('debería existir y ser clickeable el botón "Previous"', () => {
        render(
          <Router>
            <Carrusel />
          </Router>
        );
    
        const buttonPrevious = screen.getByRole('button', { name: 'Previous' });
        expect(buttonPrevious).toBeInTheDocument();
    
        fireEvent.click(buttonPrevious);
       
      });
    
      test('debería existir y ser clickeable el botón "Next"', () => {
        render(
          <Router>
            <Carrusel />
          </Router>
        );
    
        const buttonNext = screen.getByRole('button', { name: 'Next' });
        expect(buttonNext).toBeInTheDocument();
    
        fireEvent.click(buttonNext);
       
      });
});
