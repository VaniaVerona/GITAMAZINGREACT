import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../components/Checkbox';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

describe('Checkbox', () => {

  const categorias = ['Categoria 1', 'Categoria 2'];

  test('debería renderizar el componente Checkbox correctamente', () => {
     const onCategoryChange = jest.fn();

    render(
      <Router>
        <Checkbox categorias={categorias} onCategoryChange={onCategoryChange} />
      </Router>
    );

    categorias.forEach((categoria) => {
      const checkbox = screen.getByRole('checkbox', { name: categoria });
      expect(checkbox).toBeInTheDocument();
    });
  });

  test('debería filtrar eventos al hacer clic en un checkbox', async () => {
   
    const onCategoryChange = jest.fn();

    render(
      <Router>
        <Checkbox categorias={categorias} onCategoryChange={onCategoryChange} />
      </Router>
    );

    const checkbox = screen.getByRole('checkbox', { name: categorias[0] });
    fireEvent.click(checkbox);

    await screen.findByRole('checkbox', { name: categorias[0] });

    expect(onCategoryChange).toHaveBeenCalledWith([categorias[0]]);

    const checkbox2 = screen.getByRole('checkbox', { name: categorias[1] });
    fireEvent.click(checkbox2);

    await screen.findByRole('checkbox', { name: categorias[1] });

    expect(onCategoryChange).toHaveBeenCalledWith(categorias);
  });

});
