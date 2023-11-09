import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table'; 
import '@testing-library/jest-dom';

describe('<Table />', () => {

    test('Muestra las tablas con sus nombres', () => {
      render(<Table eventsData={[]} />); 
    
      const eventsTable = screen.getByText('Events Statistics');
      const upcomingTable = screen.getByText('Upcoming Events Statistics by Category');
      const pastTable = screen.getByText('Past Events Statistics by Category');
    
      expect(eventsTable).toBeInTheDocument();
      expect(upcomingTable).toBeInTheDocument();
      expect(pastTable).toBeInTheDocument();
    });
    
});
