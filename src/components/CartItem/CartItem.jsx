// <----- Imports ----->
import React from 'react'
import { cartContext } from '../../context/cartContext';
import './CartItem.scss'
// <------------------->

export default function CartItem({ itemInCart }) {

  const {removeItem} = React.useContext(cartContext);

  function handleRemoveItem(idToRemove){
    removeItem(idToRemove);
  }

  return (
    <div className="border-bottom border-end border-3 rounded-3 py-4" id="cartDetailStyle">
      <div className="container">
        <div className="d-flex flex-row justify-content-around align-items-center text-center">
          <img id="cartDetailImage" src={itemInCart.image} alt="Album cover"></img>
          <div className="d-flex flex-column">
            <p>Song: {itemInCart.title}</p>
            <p>Artist: {itemInCart.artist}</p>
          </div>
          <div className="d-flex">
            <p>Price per song: ${itemInCart.price}</p>
          </div>
          <div className="d-flex flex-column">
            <p className="fw-bold">X{itemInCart.count}</p>
          </div>
          <div className="d-flex flex-column">
            <button onClick={() => handleRemoveItem(itemInCart.id)} className="btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}
