import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import BotonMultiuso from './practica/microdesafio2/BotonMultiuso'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const handleClick=()=>{
    alert("Funcion cambia de color")
  }

  return (
    <ChakraProvider>

      <NavBar/>
      <ItemListContainer title="Comé Cabron Tienda" />
        
    </ChakraProvider>  
)
}

export default App
