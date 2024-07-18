import React, { useContext } from "react";
import { Badge, Box, Flex } from "@chakra-ui/react";
import { IoBagOutline } from "react-icons/io5";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity }= useContext(Context)  //traigo contexto

  return (
    <Flex mt={'20px'} mr={4} justify={'space-between'}>
      <Link to='/cart'>
      <IoBagOutline color={'black'} fontSize={20} />
      </Link>
      <Flex justify={'center'} alignItems={'start'}>
          <Badge fontSize={'12px'} backgroundColor={'white'} pl={'4px'} pr={'4px'}  borderRadius={'100%'} > {getQuantity()} </Badge>
      </Flex>
    </Flex>
  );
};

export default CartWidget;
