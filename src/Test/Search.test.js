import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search'; 
import '@testing-library/jest-dom';

describe('<Search />', () => {
  test('Muestra el campo de búsqueda y Permite la entrada de texto' , () => {
   
    render(<Search onSearch={() => {}} />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'Texto de prueba' } });
    expect(searchInput).toHaveValue('Texto de prueba');
  });
});