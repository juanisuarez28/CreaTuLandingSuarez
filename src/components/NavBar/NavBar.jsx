import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import "./NavBar.css";
import LogoComeCabron from "../LogoComeCabron/LogoHaven";

const NavBar = () => {
  return (
    <Flex className="navbar" direction={'column'} w={'100%'}>
      <Flex className="logobar" pl={'12%'} pr={'13%'} justify={"space-between"} w={"100%"} align={"center"} height={"4rem"}>
        <LogoComeCabron />
        <CartWidget />
      </Flex>
      <Flex pl={'30%'} pr={'30%'} justify={'space-between'} w={'100%'} align={'center'} height={'3rem'}>
      <Link to='/productos'>
          <Button color='#000000' variant='ghost'>
            Ver todo
          </Button>
        </Link>
        <Link to='/categorias/remeras'>
          <Button color='#000000' variant='ghost'>
            Remeras
          </Button>
        </Link>
        <Link to='/categorias/pantalones'>
          <Button color='#000000' variant='ghost'>
            Pantalones
          </Button>
        </Link>
        <Link to='/categorias/hoodies'>
          <Button color='#000000' variant='ghost'>
            Hoodies
          </Button>
        </Link>
        <Link to='/categorias/bermudas'>
          <Button color='#000000' variant='ghost'>
            Bermudas
          </Button>
        </Link>
        <Link to='/categorias/zapatillas'>
          <Button color='#000000' variant='ghost'>
            Zapatillas
          </Button>
        </Link>
      </Flex>
    </Flex>

  );
};

export default NavBar;
