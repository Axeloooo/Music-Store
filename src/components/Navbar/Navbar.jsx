import React from 'react'
import './Navbar.css'
import pokemon from '../Media/pokemon.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning navbar-warning py-1 fixed-top" id="navbar">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={pokemon} alt="#" id="pokemon" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Tienda
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Historia
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><a class="dropdown-item" href="#">Uno</a></li>
                <li><a class="dropdown-item" href="#">Dos</a></li>
                <li><a class="dropdown-item" href="#">Tres</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-warning btn-lg">
                <i className="bi bi-cart"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
