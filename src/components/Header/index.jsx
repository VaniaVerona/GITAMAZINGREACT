import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../src/assets/img/AMAZING.png" alt="Logo" width={125} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="btn btn-sm nav-link me-2" activeClassName="active" id="home-btn">
                <strong className="bold-text">HOME</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/upcoming" className="btn btn-sm nav-link me-2" activeClassName="active" id="upcoming-events-btn">
                <strong className="bold-text">UPCOMING EVENTS</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/past" className="btn btn-sm nav-link me-2" activeClassName="active" id="past-events-btn">
                <strong className="bold-text">PAST EVENTS</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="btn btn-sm nav-link me-2" activeClassName="active" id="contact-btn">
                <strong className="bold-text">CONTACT</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/stats" className="btn btn-sm nav-link me-2" activeClassName="active" id="stats-btn">
                <strong className="bold-text">STATS</strong>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
