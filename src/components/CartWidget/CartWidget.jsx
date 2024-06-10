import React from "react";
import { Box } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Box mr={6}>
      <IoCart fontSize={22} />
    </Box>
  );
};

export default CartWidget;
