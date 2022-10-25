// <----- Imports ----->
import React from 'react'
import './Navbar.css'
import logo from '../Media/logo.png'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li><Link to={'/Category/Drake'} className="dropdown-item">Drake</Link></li>
                <li><Link to={'/Category/The Weeknd'} className="dropdown-item">The Weeknd</Link></li>
                <li><Link to={'/Category/Bad Bunny'} className="dropdown-item">Bad Bunny</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-lg">
                <CartWidget></CartWidget>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
