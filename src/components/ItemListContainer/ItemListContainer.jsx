import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {PulseLoader} from 'react-spinners';

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  const [loading, setLoading]= useState(true); //seteamos el estado del spinner en true, ya que queremos que sea lo primero que se muestre

  useEffect(() => {
    setLoading(true)
    const dataProductos = category ? getProductsByCategory(category) : getProducts()  //si llega categoria por params, filtra por categoria y sino retorna todos los productos
      
    dataProductos
      .then((prod) => setProducts(prod))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))  //cuando se renderizen los productos desaparece el spinner

  }, [category]); //aca van los datos que queremos que al cambiar actualicen la renderizacion

  return (
    <Flex direction={"column"} justify={"center"} align={"center"}>
      <Heading>{title}</Heading>
    {
      loading ?                               //if loading ==true
      <Flex justify={'center'} align={'center'} h={'50vh'}>                                       
          <PulseLoader color="grey" />            
      </Flex>                                 //renderiza spinner
      :                                       //else
      <ItemList products={products} />        //renderiza productos
    }

    </Flex>
  );
};

export default ItemListContainer;
