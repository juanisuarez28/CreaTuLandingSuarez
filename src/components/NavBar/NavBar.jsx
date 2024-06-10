import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { FaChevronDown } from "react-icons/fa";
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
import LogoComeCabron from "../LogoComeCabron/LogoComeCabron";

const NavBar = () => {
  return (
    <Flex justify={"space-between"} w={"100%"} align={"center"} height={"4rem"}>
      <Heading> <LogoComeCabron /> </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
