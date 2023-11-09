import { render, screen } from '@testing-library/react';
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom';

describe('<Formulario />', () => {
  test('Muestra campos de entrada para name, email y mensaje', () => {
    render(<Formulario />);

    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const messageTextarea = screen.getByPlaceholderText('Enter your message');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
  });

  test('Muestra etiquetas para los campos name, email y mensaje', () => {
    render(<Formulario />);

    const nameLabel = screen.getByText('Name:');
    const emailLabel = screen.getByText('Email address:');
    const messageLabel = screen.getByText('Message:');

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  test('Muestra el botón "Submit"', () => {
    render(<Formulario />);

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeInTheDocument();
  });

  });
