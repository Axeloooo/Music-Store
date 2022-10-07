import React from 'react'
import './Card.css'

export default function Card(props) {
  return(
    <div className="border-bottom border-end border-3 rounded-3 py-4" id="cardStyle">
      <div className="container">
        <div className="d-flex flex-column justify-content-between align-items-center gap-3 text-center">
          <img src={props.image} id="cardImage"></img>
          <h4><strong>{props.title}</strong></h4>
          <p>{props.artist}</p>
          <p>{props.album}</p>
          <button className="btn">Add</button>
        </div>
      </div>
    </div>
  );
}
