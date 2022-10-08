import React from 'react';
import './CardDetails.css';
import ItemCounter from '../ItemCounter/ItemCounter';

export default function CardDetails(props) {
  return(
    <div className="border-bottom border-end border-3 rounded-3 py-4" id="cardDetailStyle">
      <div className="container">
        <div className="d-flex flex-row justify-content-around align-items-center text-center">
          <img id="cardDetailImage" src={props.image} alt="Album cover"></img>
          <div className="d-flex flex-column">
            <h1>{props.title}</h1>
            <p>Artist: {props.artist}</p>
            <p>Genre: {props.genre}</p>
            <p>Year: {props.year}</p>
            <p>Duration: {props.length}</p>
            <p>Available: {props.stock}</p>
            <h3>Price: ${props.price}</h3>
          </div>
          <div className="d-flex">
            <ItemCounter initial={props.initial} stock={props.stock}></ItemCounter>
          </div>
        </div>
      </div>
    </div>
  );
}
