import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    getProducts()
      .then((prod) => setProducts(prod))
      .catch((error) => console.log(error));

    
  }, []);

  return (
    <Flex direction={"column"} justify={"center"} align={"center"}>
      <Heading>{title}</Heading>
      <ItemList products={products} category={categoryId} />
    </Flex>
  );
};

export default ItemListContainer;
