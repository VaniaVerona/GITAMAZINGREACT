import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
  console.log("props", props);
    return (
        
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 event-card mb-5" style={{ transform: 'perspective(1000px)', transition: 'transform 0.2s' }}>
            <div className="card h-100" style={{ transform: 'rotateY(0deg)', transition: 'transform 0.5s' }}>
                <div className="card-img-container">
                <img src={props.image} className="card-img-top" alt={props.title} />
                </div>
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center mb-3">
                        <h5 className="card-title mb-0"><strong>{props.title}</strong></h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100">
                    <p className="m-0"><strong>Price: ${props.price}</strong></p>
                    <Link to={`/details/${props.id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;


