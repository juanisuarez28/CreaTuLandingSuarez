import { Box, Flex } from '@chakra-ui/react'
import Item from '../Item/Item'
import React from 'react'

const ItemList = ({ products }) => {

    return (
    <Flex w={'80%'} wrap={'wrap'} justify={'center'} align={'center'} pt={'3%'}>
        {
            products.map((prod) => (
                <Box m={'2%'} mb={'4%'} key={prod.id}> 
                    <Item {...prod} />
                </Box>
            ))
        }
    </Flex>
  )
}

export default ItemList