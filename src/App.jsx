import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import BotonMultiuso from "./practica/microdesafio2/BotonMultiuso";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {
  const handleClick = () => {
    alert("Funcion cambia de color");
  };

  return (
    <ChakraProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer title="Comé Cabron Tienda" />} />
          <Route path="/categorias/:category" element={ <ItemListContainer title="Comé Cabron Tienda" />} />
          <Route path="/producto/:productId" element={ <ItemDetailContainer />} />
          <Route path="/item" element={<ItemDetail />}/>
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
