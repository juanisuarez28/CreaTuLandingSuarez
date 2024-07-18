import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {PulseLoader} from 'react-spinners';
import Hero from "../Hero/Hero";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/Firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams(); //toma la categoria por parametros

  const [loading, setLoading]= useState(true); //seteamos el estado del spinner en true, ya que queremos que sea lo primero que se muestre

  useEffect(() => {
    setLoading(true)
    const getData= async ()=> {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ?
      coleccion : query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef) //obtengo los documentos de firebase

      const productosFirebase = response.docs.map((doc)=>{ //mapeo los documentos a objetos, asi obtengo su id
        const newItem = {
          ...doc.data(),
          id:doc.id
        }
        return newItem
      })
       setProducts(productosFirebase) //seteo los nuevos productos
       setLoading(false) //spinner false
    }

    getData()

  }, [categoryId]); //aca van los datos que queremos que al cambiar actualicen la renderizacion

  return (
    <Flex direction={"column"} justify={"center"} align={"center"} pt={'110px'}>
  
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
