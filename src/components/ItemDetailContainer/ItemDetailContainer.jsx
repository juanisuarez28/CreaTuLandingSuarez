import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductosById } from '../../data/asyncMock';
import { Box, Flex } from '@chakra-ui/react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { PulseLoader } from 'react-spinners';

const ItemDetailContainer = () => {
    const [product, setProduct]= useState([]);

    const { productId } = useParams();

    const [loading, setLoading]= useState(true); //seteamos el estado del spinner en true, ya que queremos que sea lo primero que se muestre


    useEffect(()=>{
        setLoading(true)

        getProductosById(productId)
            .then((data)=> setProduct(data))
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))  //cuando se renderizen los productos desaparece el spinner

    }, [])

    return (
    <Box align={'center'} justify={'center'} pt={'120px'} > 
        {
            loading ?
            <Flex justify={'center'} align={'center'} h={'50vh'}>                                       
                <PulseLoader color="grey" />            
            </Flex> 
            :
            <ItemDetail {...product} />
        }
    </Box>
  )
}

export default ItemDetailContainer