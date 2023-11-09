import React from 'react';
import './style.css';

function Table({ eventsData }) {
  const encontrarEventoConMayorPorcentajeAsistencia = (events) => {
    return events.reduce((mayorPorcentaje, evento) => {
      const estimado = parseFloat(evento.estimate || 0);
      const asistencia = parseFloat(evento.assistance || 0);
      const capacidad = parseFloat(evento.capacity);

      const porcentaje = ((estimado + asistencia) / capacidad) * 100;

      if (porcentaje > mayorPorcentaje.porcentaje) {
        return { nombre: evento.name, porcentaje };
      }

      return mayorPorcentaje;
    }, { nombre: null, porcentaje: 0 });
  };

  function encontrarEventoConMenorPorcentajeAsistencia(events) {
    return events.reduce((eventoMenorPorcentaje, evento) => {
      const estimado = parseFloat(evento.estimate || 0);
      const asistencia = parseFloat(evento.assistance || 0);
      const capacidad = parseFloat(evento.capacity);

      const porcentaje = ((estimado + asistencia) / capacidad) * 100;
      if (porcentaje < eventoMenorPorcentaje.porcentaje) {
        return { nombre: evento.name, porcentaje };
      }
      return eventoMenorPorcentaje;
    }, { nombre: null, porcentaje: 100 });
  }

  function encontrarEventoConMayorCapacidad(events) {
    return events.reduce((eventoMayorCapacidad, evento) => {
      const capacidad = parseFloat(evento.capacity);

      if (capacidad > eventoMayorCapacidad.capacidad) {
        return { nombre: evento.name, capacidad };
      }
      return eventoMayorCapacidad;
    }, { nombre: null, capacidad: 0 });
  }

  const eventoMayorPorcentaje = encontrarEventoConMayorPorcentajeAsistencia(eventsData);
  const eventoMenorPorcentaje = encontrarEventoConMenorPorcentajeAsistencia(eventsData);
  const eventoMayorCapacidad = encontrarEventoConMayorCapacidad(eventsData);

  function calculateCategoryStatisticsPasados(events) {
    const categories = [];
    const categoryRevenues = [];
    const categoryAssistance = [];
    const categoryCapacity = [];

    for (const event of events) {
      if (event.assistance) {
        const { category, assistance, price, capacity } = event;
        const categoryIndex = categories.indexOf(category);

        if (categoryIndex === -1) {
          categories.push(category);
          categoryRevenues.push(0);
          categoryAssistance.push(0);
          categoryCapacity.push(0);
        }

        const currentIndex = categories.indexOf(category);
        categoryRevenues[currentIndex] += assistance * price;
        categoryAssistance[currentIndex] += assistance;
        categoryCapacity[currentIndex] += capacity;
      }
    }

    return { categories, categoryRevenues, categoryAssistance, categoryCapacity };
  }

  const { categories, categoryRevenues, categoryAssistance, categoryCapacity } = calculateCategoryStatisticsPasados(eventsData);

  function calculateCategoryStatisticsFuturos(events) {
    const categories = [];
    const categoryRevenues = [];
    const categoryEstimates = [];
    const categoryCapacity = [];

    for (const event of events) {
      if (event.estimate) {
        const { category, estimate, price, capacity } = event;
        const categoryIndex = categories.indexOf(category);

        if (categoryIndex === -1) {
          categories.push(category);
          categoryRevenues.push(0);
          categoryEstimates.push(0);
          categoryCapacity.push(0);
        }

        const currentIndex = categories.indexOf(category);
        categoryRevenues[currentIndex] += estimate * price;
        categoryEstimates[currentIndex] += estimate;
        categoryCapacity[currentIndex] += capacity;
      }
    }

    return { categories, categoryRevenues, categoryEstimates, categoryCapacity };
  }

  const { categories: futureCategories, categoryRevenues: futureRevenues, categoryEstimates, categoryCapacity: futureCapacity } = calculateCategoryStatisticsFuturos(eventsData);

  return (
    <>
      <div className="container mb-5">
        <table id="events-stats" className="table table-bordered table-fixed mt-5">
          <thead>
            <tr>
              <th colSpan={3} style={{ backgroundColor: 'black', color: 'white' }}>
                <h5>Events Statistics</h5>
              </th>
            </tr>
            <tr>
              <th className="col-md-4">Events with highest % of assistance</th>
              <th className="col-md-4">Events with lowest % of assistance</th>
              <th className="col-md-4">Events with large capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{eventoMayorPorcentaje.nombre}, {eventoMayorPorcentaje.porcentaje.toFixed(2)}%</td>
              <td>{eventoMenorPorcentaje.nombre}, {eventoMenorPorcentaje.porcentaje.toFixed(2)}%</td>
              <td>{eventoMayorCapacidad.nombre}, {eventoMayorCapacidad.capacidad}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container mb-5">
        <table id="upcoming-events-stats" className="table table-bordered table-fixed">
          <thead>
            <tr>
              <th colSpan={3} style={{ backgroundColor: 'black', color: 'white' }}>
                <h5>Upcoming Events Statistics by Category</h5>
              </th>
            </tr>
            <tr>
              <th className="col-md-4">Categories</th>
              <th className="col-md-4">Revenues</th>
              <th className="col-md-4">Estimate Percentage</th>
            </tr>
          </thead>
          <tbody>
            {futureCategories.map((category, index) => {
              const revenues = futureRevenues[index];
              const totalEstimates = categoryEstimates[index];
              const totalCapacity = futureCapacity[index];
              const estimatePercentage = ((totalEstimates / totalCapacity) * 100).toFixed(2);
              return (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{revenues.toFixed(2)}</td>
                  <td>{estimatePercentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container mb-5">
        <table id="past-events-stats" className="table table-bordered table-fixed">
          <thead>
            <tr>
              <th colSpan={3} style={{ backgroundColor: 'black', color: 'white' }}>
                <h5>Past Events Statistics by Category</h5>
              </th>
            </tr>
            <tr>
              <th className="col-md-4">Categories</th>
              <th className="col-md-4">Revenues</th>
              <th className="col-md-4">Percentage of assistance</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              const revenues = categoryRevenues[index];
              const totalAssistance = categoryAssistance[index];
              const totalCapacity = categoryCapacity[index];
              const percentageAssistance = ((totalAssistance / totalCapacity) * 100).toFixed(2);
              return (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{revenues.toFixed(2)}</td>
                  <td>{percentageAssistance}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
