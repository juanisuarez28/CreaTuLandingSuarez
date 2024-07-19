import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { PulseLoader } from 'react-spinners';
import { db } from '../../config/Firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct]= useState([]);

    const { productId } = useParams();

    const [loading, setLoading]= useState(true); //seteamos el estado del spinner en true, ya que queremos que sea lo primero que se muestre

    console.log(db)
    useEffect(()=>{
        setLoading(true)
        const getData= async ()=>{
            const queryRef= doc(db, 'productos', productId) //creo la query con el id del producto  
            const response = await getDoc(queryRef) //obtengo el doc de firebase

            const newItem= {    //convierto en objeto
                ...response.data(),
                id: response.id
            }

            setProduct(newItem)
            setLoading(false)
        }

        getData()
    }, [])

    return (
    <Box align={'center'} justify={'center'} pt={'12rem'} > 
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