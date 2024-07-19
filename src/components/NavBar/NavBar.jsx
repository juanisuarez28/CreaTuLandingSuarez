import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import "./NavBar.css";
import LogoHaven from "../LogoHaven/LogoHaven";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Banner from "../Banner/Banner";

const NavBar = () => {
  return (
    <Box>
      
    <Flex className="navbar" direction={'column'} w={'100%'}>
    <Banner/>
      <Flex className="logobar" pl={'12%'} pr={'13%'} justify={"space-between"} w={"100%"} align={"center"} height={"4rem"}>
        <LogoHaven />
        <Flex align={"center"}>
          <CartWidget />
          <div className="lg:hidden">
            <HamburgerMenu />
          </div>
        </Flex>
      </Flex>
      <Flex pl={'30%'} pr={'30%'} justify={'space-between'} w={'100%'} align={'center'} height={'3rem'} className="menugrande">
        <Link to='/productos'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            ver todo.
          </Button>
        </Link>
        <Link to='/categorias/remeras'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            remeras.
          </Button>
        </Link>
        <Link to='/categorias/pantalones'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            pantalones.
          </Button>
        </Link>
        <Link to='/categorias/hoodies'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            hoodies.
          </Button>
        </Link>
        <Link to='/categorias/bermudas'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            bermudas.
          </Button>
        </Link>
        <Link to='/categorias/zapatillas'>
          <Button fontSize={'15px'} color='#000000' variant='ghost'>
            zapatillas.
          </Button>
        </Link>
      </Flex>
    </Flex>
    </Box>
  );
};

export default NavBar;
