import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {CartContextProvider} from './context/CartContext'
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";


function App() {
  const handleClick = () => {
    alert("Funcion cambia de color");
  };

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={ <ItemListContainer />} />
            <Route path="/categorias/:categoryId" element={ <ItemListContainer />} />
            <Route path="/producto/:productId" element={ <ItemDetailContainer />} />
            <Route path="/item" element={<ItemDetail />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
          
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
