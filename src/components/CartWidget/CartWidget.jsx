import React, { useContext } from "react";
import { Badge, Box, Flex } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity }= useContext(Context)  //traigo contexto

  return (
    <Flex mr={6} justify={'space-between'}>
      <Link to='/cart'>
        <IoCart color={'black'} fontSize={25} />
      </Link>
      <Flex justify={'center'} alignItems={'start'}>
          <Badge fontSize={'11px'} backgroundColor={'black'} pl={'4px'} pr={'4px'} pt={'0.3'} pb={'0.3'} borderRadius={'100%'} color={'white'}> {getQuantity()} </Badge>
      </Flex>
    </Flex>
  );
};

export default CartWidget;
