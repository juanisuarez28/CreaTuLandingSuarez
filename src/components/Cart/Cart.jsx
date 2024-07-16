import React from 'react'
import { useContext } from 'react'
import Context from '../../context/CartContext'
import { Box, Flex, Img, Text, Button, ButtonGroup} from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import "./Cart.css"
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, getTotalPrice, getQuantity, clearCart, removeItem } = useContext(Context)

    if(getQuantity()===0){
        return(
            <Flex mt={'3%'} justify={'center'} align={'center'} flexDirection={'column'}>
                <Text fontSize={'40px'} fontWeight={'700'}>EL CARRITO ESTÁ VACÍO</Text>
                <Text mt={'30px'}>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</Text>
                <Link to='/'>
                    <Button mt={'20px'} rightIcon={<FaArrowRight />} color={'white'} backgroundColor={'#727078'} variant='solid'>
                      EMPEZAR
                  </Button>
                </Link>
            </Flex>
        )
    }else{
        return (
          <Flex mt={'3%'} justify={'center'}>
      
              <Flex pl={'30px'} align={'flex-start'} width={'40%'} flexDirection={'column'}>
                  <Text  fontSize={'40px'} fontWeight={'700'}>TU CARRITO</Text>
                  <Text mt={'20px'} fontSize={'18px'}>Total ({getQuantity()} productos) <span fontWeight={'500'}>${getTotalPrice()}</span></Text>
                  <Text mt={'15px'} w={'70%'}>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</Text>
                  {
                      cart.map((prod)=>(
                          <Flex key={prod.id} justifyContent={'space-between'} border={'1px solid black'} width={'70%'} mt={'30px'}>
                              <Flex>
                                  <Img 
                                      src={prod.img}         
                                      objectFit={'cover'}
                                      w={'120px'}
                                      h={'120px'} 
                                      />
                                  <Flex ml={'15px'} justify={'flex-start'} flexDirection={'column'}>
                                      <Text fontWeight={'500'} fontSize={'18px'} mt={'15px'} mb={'5px'} >{prod.nombre}</Text>
                                      <Text fontSize={'16px'} >Cantidad: {prod.quantity}</Text>
                                  </Flex>
                              </Flex>
                              <Flex>
                                  <Text mt={'15px'} fontSize={'18px'} mr={'30px'}>${prod.precio}</Text>
                                  <Box mt={'17px'} mr={'10px'} flexDirection={'column'}>
                                      <MdDelete cursor={'pointer'} onClick={() => removeItem(prod.id)} fontSize={'20px'}/>
                                  </Box>
                              </Flex> 
                          </Flex>
                      ))
                  }
                  <Button onClick={()=> clearCart()} mt={'25px'} rightIcon={<MdDelete />} variant='solid'>
                      Vaciar carrito
                  </Button>
              </Flex>
      
              <Flex flexDirection={'column'}>
                  <Text fontSize={'23px'} fontWeight={'600'}>Resumen del pedido</Text>
                  <Box display={'flex'} mt={'20px'} justifyContent={'space-between'}>
                      <Text>{getQuantity()} productos</Text>
                      <Text>${getTotalPrice()}</Text>
                  </Box>
                  <Box display={'flex'} mt={'5px'} justifyContent={'space-between'}>
                      <Text>Entrega</Text>
                      <Text>Gratis</Text>
                  </Box>
                  <Box display={'flex'} mt={'20px'} justifyContent={'space-between'}>
                      <Text fontWeight={'600'}>Total</Text>
                      <Text fontWeight={'600'}>${getTotalPrice()}</Text>
                  </Box>
                  <Button mt={'10px'} rightIcon={<FaArrowRight />} color={'white'} backgroundColor={'#727078'} variant='solid'>
                      IR A PAGAR
                  </Button>
              </Flex>    
          </Flex>
        )
    }
}

export default Cart