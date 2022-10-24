// <----- Imports ----->
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
// <------------------->

export default function Card({ song }) {
  return(
    <div className="border-bottom border-end border-3 rounded-3 py-4" id="cardStyle">
      <div className="container">
        <div className="d-flex flex-column justify-content-between align-items-center gap-3 text-center">
          <img src={song.image} id="cardImage" alt="Album cover"></img>
          <h4><strong>{song.title}</strong></h4>
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <Link to={`/Song/id/${song.id}`}><button className="btn">See more</button></Link>
        </div>
      </div>
    </div>
  );
}
