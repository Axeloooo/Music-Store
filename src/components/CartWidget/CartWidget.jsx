// <----- Imports ----->
import React from 'react'
import { cartContext } from '../../context/cartContext'
// <------------------->

export default function CartWidget() {
  const {getTotalItemCount} = React.useContext(cartContext);
  return (
    <div>
      {getTotalItemCount() === 0 ? <div><i className="bi bi-cart"></i></div> : <div><i className="bi bi-cart"></i><span>{getTotalItemCount()}</span></div>}
    </div>
  );
}
