import React from 'react';
import './style.css';

function Detalles({ event }) {
  return (
    <div className="card mb-3 mx-auto" style={{ position: 'relative', top: 50 }}>
      <div className="row g-0">
        <div className="col-md-5 col-12 d-flex align-items-center justify-content-center">
          <img src={event.image} className="img-fluid rounded-start h-100 my-auto mx-auto p-3" alt={event.name} style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-7 col-12">
          <div className="card-body">
            <div className="custom-container mt-2 p-5">
              <h3 className="card-title"><strong>{event.name}</strong></h3>
              <p className="card-text">{event.description}</p>
              <ul className="list-unstyled">
                <li><strong>Date:</strong> {event.date}</li>
                <li><strong>Category:</strong> {event.category}</li>
                <li><strong>Place:</strong> {event.place}</li>
                <li><strong>Capacity:</strong> {event.capacity}</li>
                <li><strong>Price:</strong> ${event.price}</li>
                {event.estimate && <li><strong>Estimate:</strong> {event.estimate}</li>}
                {event.assistance && <li><strong>Assistance:</strong> {event.assistance}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalles;


    