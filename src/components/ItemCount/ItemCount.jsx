import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(initialValue, stock)

  return (
    <div>
        <button onClick={incrementar}>+</button>
        <span>{count}</span>
        <button onClick={decrementar}>-</button>
        <Button onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount