// <----- Imports ----->
import React from 'react';
import './CardDetails.css';
import ItemCounter from '../ItemCounter/ItemCounter';
import Loader from '../Loader/Loader';
// <------------------->

export default function CardDetails({ song }) {
  if(song.title){
    return(
      <div className="border-bottom border-end border-3 rounded-3 py-4" id="cardDetailStyle">
        <div className="container">
          <div className="d-flex flex-row justify-content-around align-items-center text-center">
            <img id="cardDetailImage" src={song.image} alt="Album cover"></img>
            <div className="d-flex flex-column">
              <h1>{song.title}</h1>
              <p>Artist: {song.artist}</p>
              <p>Genre: {song.genre}</p>
              <p>Year: {song.year}</p>
              <p>Duration: {song.length}</p>
              <p>Available: {song.stock}</p>
              <h3>Price: ${song.price}</h3>
            </div>
            <div className="d-flex">
              <ItemCounter initial={song.initial} stock={song.stock}></ItemCounter>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return(
    <Loader></Loader>
  );
}
