// <----- Imports ----->
import React from 'react'
import './Navbar.css'
import logo from '../Media/logo.png'
import { Link } from 'react-router-dom';
// <------------------->

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-warning navbar-warning py-1 fixed-top" id="navbar">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          <img src={logo} alt="#" id="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/Albums'} className="nav-link">
                Albums
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><Link to={'/Category/Drake'} class="dropdown-item">Drake</Link></li>
                <li><Link to={'/Category/The Weeknd'} class="dropdown-item">The Weeknd</Link></li>
                <li><Link to={'/Category/Bad Bunny'} class="dropdown-item">Bad Bunny</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-lg">
                <i className="bi bi-cart"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
