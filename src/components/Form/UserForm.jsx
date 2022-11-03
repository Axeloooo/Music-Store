// <----- Imports ----->
import React from 'react'
import { cartContext } from '../../context/cartContext'
import InputForm from './InputForm';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/firebase';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// <------------------->

export default function UserForm() {

  const {cart, getTotalItemCount, getTotalPrice, clearCart} = React.useContext(cartContext);

  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    name:"",
    email:"",
    phone:""
  });

  function onInputChange(evt){
    const name = evt.target.name;
    const value = evt.target.value;
    let newUserData = {...userData};
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onReset(evt){
    clearCart();
  }

  function onSubmit(evt){

    evt.preventDefault();

    const orderData = {
      buyerData: userData,
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
        navigate(`/`);
        clearCart();
      });
    });

    setUserData({
      name:"",
      email:"",
      phone:""
    });
  }

  return(
    <div>
      {
        getTotalItemCount() === 0 ?
        <div>Cart is empty</div>
        :
        <div>
          <div className="d-flex flex-column align-items-center gap-5">
            <div className="border-bottom border-end border-3 rounded-3 p-4 w-100" id="cartDetailStyle">
              <div className="container">
                <div className="d-flex flex-row justify-content-around align-items-center text-center gap-5">
                  <h5>Total Items In Cart: {getTotalItemCount()}</h5>
                  <h5>Total Price: ${getTotalPrice()}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <form onSubmit={onSubmit} onReset={onReset}>
              <InputForm value={userData.name} title="Name" name="name" required={true} onChange={onInputChange}></InputForm>
              <InputForm value={userData.email} title="Email" name="email" required={true} onChange={onInputChange}></InputForm>
              <InputForm value={userData.phone} title="Phone Number" name="phone" required={true} onChange={onInputChange}></InputForm>
              <div className="d-flex align-items-center justify-content-evenly">
                <button className="btn btn-success" type="submit">Checkout</button>
                <button className="btn btn-danger" type="reset">Reset All</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}
