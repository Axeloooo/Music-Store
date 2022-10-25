// <----- Imports ----->
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'
import { createOrder } from '../../services/firebase';
import CartItem from '../CartItem/CartItem';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// <------------------->

export default function Cart() {
  const navigate = useNavigate();
  const {cart, getTotalItemCount, getTotalPrice, clearCart} = React.useContext(cartContext)

  function handleCheckout(){
    const buyerData = {
      name: "Axel",
      email: "axelshz@gmail.com",
      phone: 5535001107
    };

    const orderData = {
      buyerData: buyerData,
      cart: cart,
      totalPrice: getTotalPrice(),
      date: new Date()
    };

    createOrder(orderData).then((resolve) => {
      Swal.fire({
        title: 'Thank you!',
        text: 'Your order has been placed.',
        icon: 'success',
        confirmButtonText: 'Continue'
      }).then((result) => {
        navigate(`/thankyou/${resolve}`);
        clearCart();
      });
    });
  }

  function handleClearCart(){
    clearCart();
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column justify-content-around align-items-center gap-4 py-4 text-center">
          {
            cart.map((itemInCart) => (
              <CartItem key={itemInCart.id} itemInCart={itemInCart}></CartItem>
            ))
          }
          {
            getTotalItemCount() === 0 ?
              <div></div>
              :
              <div className="border-bottom border-end border-3 rounded-3 py-4" id="cartDetailStyle">
                <div className="container">
                  <div className="d-flex flex-row justify-content-around align-items-center text-center">
                    <h5 className="fw-bold">Total Items In Cart: {getTotalItemCount()}</h5>
                    <h5 className="fw-bold">Total Price: ${getTotalPrice()}</h5>
                  </div>
                </div>
              </div>
          }
          {
            getTotalItemCount() === 0 ? 
              <div>
                <p>Cart is empty</p>
              </div>
              :
              <div className='d-flex flex-row gap-5'>
                <button onClick={handleCheckout} className="btn btn-lg border-bottom border-end border-3" id="cartCheckoutBtn">Checkout</button>
                <button onClick={handleClearCart} className="btn btn-lg border-bottom border-end border-3" id="cartCheckoutBtn">Clear Cart</button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
