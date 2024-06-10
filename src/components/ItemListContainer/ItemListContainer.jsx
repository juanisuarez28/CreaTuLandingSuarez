import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({ title }) => {
  return (
    <Center>
      <Heading>{title}</Heading>
    </Center>
  );
};

export default ItemListContainer;
