// <----- Imports ----->
import Navbar from "./components/Navbar/Navbar";
import './App.scss';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirebaseApp from "./services/firebase";
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import CartDetailCheckout from "./components/CartDetailCheckout/CartDetailCheckout";
// <------------------->

function App() {
  return (
    <body>
      <CartContextProvider>

        <BrowserRouter>

          <Navbar></Navbar>

          <Routes>

            <Route
              path='/' element={<ItemListContainer></ItemListContainer>}
            ></Route>

            <Route
              path='/Category/:categoryId' element={<ItemListContainer></ItemListContainer>}
            ></Route>

            <Route
              path='/Song/id/:songId' element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>

            <Route
              path='/Cart' element={<Cart></Cart>}
            ></Route>

            <Route
              path='/thankyou/:orderCheckoutId' element={<CartDetailCheckout></CartDetailCheckout>}
            ></Route>

          </Routes>

        </BrowserRouter>

      </CartContextProvider>
    </body>
  );
}

export default App;
