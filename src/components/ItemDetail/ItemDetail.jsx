import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Image, Text, Divider } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';


const ItemDetail = ({nombre, descripcion, precio, id, img, stock}) => {

  const onAdd = (quantity)=>{
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
        <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
      </ButtonGroup>
    </CardFooter>
    <ToastContainer />
  </Card>
  )
}

export default ItemDetail