import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Image, Text, Divider } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({nombre, descripcion, precio, id, img, stock}) => {

  const [cantidad, setCantidad]= useState(0)
  const { addItem } = useContext(Context) //me traigo la funcion addItem de CartContext 

  const onAdd = (quantity)=>{
    const item = {
      id, nombre, precio, img
    }
    setCantidad(quantity)
    addItem(item, quantity)
    toast(`Agregaste ${quantity} ${nombre} al carrito`)
  }

  return (
    <Card maxW="sm" margin={'4rem'}>
    <CardBody>
      <Image
        src={img}
        alt={nombre}
        borderRadius="lg"
        objectFit={'cover'}
        w={'300px'}
        h={'300px'}
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{nombre}</Heading>
        <Text color="blue.600" fontSize="2xl">
          ${precio}
        </Text>
        <Text>
          Descripcion: {descripcion}
          </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        {
          cantidad === 0 ?
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
          :
          <Link to='/cart'>
            <Button variant='solid'>
              Ver carrito
            </Button>
          </Link>

        }
      </ButtonGroup>
    </CardFooter>
    <ToastContainer />
  </Card>
  )
}

export default ItemDetail