// <----- Imports ----->
import React from 'react'
// <------------------->

const cartContext = React.createContext();

function CartContextProvider(props) {
  const [cart, setCart] = React.useState([]);

  function addToCart(item, count){
    let newCart = [...cart];
    newCart.push({...item, count});
    setCart(newCart);
  }

  function getTotalItemCount(){
    let total = 0;
    cart.forEach((itemInCart) => {
      total += itemInCart.count;
    });
    return total;
  }

  function removeItem(idToRemove){
    let newCart = cart.filter((itemInCart) => {
      return (itemInCart.id !== idToRemove);
    });
    setCart(newCart);
  }

  function getTotalPrice(){
    let total = 0;
    cart.forEach((itemInCart) => {
      total += (itemInCart.count * itemInCart.price);
    });
    return total;
  }

  function clearCart(){
    setCart([]);
  }
  
  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem, getTotalPrice, clearCart }}>
        {props.children}
      </cartContext.Provider>
    </>
  )
}

export { cartContext, CartContextProvider };
