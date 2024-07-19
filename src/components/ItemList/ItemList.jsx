import { Box, Flex } from "@chakra-ui/react";
import Item from "../Item/Item";
import "./ItemList.css";
import React, { useEffect, useState } from "react";

const ItemList = ({ products, category }) => {

    const [ categoria, setCategoria ]= useState('colección')

    useEffect(()=>{
        if(category!= null){
            setCategoria(category)
        }
    })

  return (
    <Flex className="itemlist" w={'80%'} align={'center'} justify={'center'} direction={'column'}>
      <Box className="flex items-baseline justify-between border-b border-gray-200 pb-6 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {categoria}.
        </h1>
      </Box>
      <Flex
        alignSelf={'center'}
        w={"100%"}
        wrap={"wrap"}
        justify={"center"}
        align={"center"}
        pt={"3%"}
      >
        {products.map((prod) => (
          <Box className="card" m={"2%"} mb={"4%"} key={prod.id}>
            <Item {...prod} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default ItemList;
