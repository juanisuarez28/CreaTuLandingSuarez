import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Image, Text, Divider } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, id, precio, img, stock }) => {
  return (
    <Card maxW="sm" margin={'1.5rem'}>
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue">
            <Link to={`/producto/${id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
