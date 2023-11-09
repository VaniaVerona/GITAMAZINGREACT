import { render, screen } from '@testing-library/react';
import Error from '../components/Error';
import '@testing-library/jest-dom';

describe('<Error/>', () => {
test('El componente Error muestra "404 "', () => {
  render(<Error />);

  const error404= screen.getByText('404');
  expect(error404).toBeInTheDocument();
});

  test('El componente Error muestra " PAGE NOT FOUND"', () => {
    render(<Error />);
   
  const errorText = screen.getByText('PAGE NOT FOUND');
  expect(errorText).toBeInTheDocument();
});

});