import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import BotonMultiuso from "./practica/microdesafio2/BotonMultiuso";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/category/:categoryId" element={ <ItemListContainer title="Comé Cabron Tienda" />} />
          <Route path="/item" element={<ItemDetail />}/>
          <Route path="*" element={ <h1>404</h1> } />
        </Routes>
        

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
