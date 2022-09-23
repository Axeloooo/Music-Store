import React from 'react'
import './Pokemon.css'

export default function Items(props) {
  return (
    <div className="container">
      <div className="d-flex-col justify-content-around align-items-center ms-auto p-3 border">
        <img src={props.image} alt="#" id="pokemonImage"></img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a className="btn btn-warning">Buy</a>
      </div>
    </div>
  );
}
