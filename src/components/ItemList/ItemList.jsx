import { Box, Flex } from '@chakra-ui/react'
import Item from '../Item/Item'
import React from 'react'

const ItemList = ({ products , category}) => {
    const filteredProducts= category ? products.filter(prod => prod.id == category) : products;

    return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'}>
        {
            filteredProducts.map((prod) => (
                <Box key={prod.id}>
                    <Item {...prod} />
                </Box>    
            ))
        }
    </Flex>
  )
}

export default ItemList