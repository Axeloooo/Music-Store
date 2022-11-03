// <----- Imports ----->
import React from 'react'
import { cartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem';
import UserForm from '../Form/UserForm';
// <------------------->

export default function Cart() {
  const { cart } = React.useContext(cartContext);

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column justify-content-around align-items-center gap-4 py-4 text-center">
          {
            cart.map((itemInCart) => (
              <CartItem key={itemInCart.id} itemInCart={itemInCart}></CartItem>
            ))
          }
          <UserForm></UserForm>
        </div>
      </div>
    </div>
  )
}
