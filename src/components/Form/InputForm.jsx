// <----- Imports ----->
import React from 'react'
// <------------------->

export default function InputForm(props) {
  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <label>{props.title}</label>
        <input
          value={props.value}
          required={props.required}
          name={props.name}
          type="text"
          onChange={props.onChange}
          placeholder={props.title}
          className="form-control"
        ></input>
      </div>
    </div>
  );
}
