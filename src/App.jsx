// <----- Imports ----->
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirebaseApp from "./services/firebase";
// <------------------->

function App() {
  return (
    <body>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/Category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/Song/id/:songId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
