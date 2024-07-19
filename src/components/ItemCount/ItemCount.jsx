import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Box, Button, Flex } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(initialValue, stock)

  return (
    <Flex mt={'1.5rem'} align={'center'}>
      <Box mr={'2rem'}>
        <Button mr={'0.5rem'} size={'sm'} onClick={incrementar}>+</Button>
        <span>{count}</span>
        <Button ml={'0.5rem'} size={'sm'} onClick={decrementar}>-</Button>
      </Box>
        <Button color={'white'} backgroundColor={'#72BB92'} onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount