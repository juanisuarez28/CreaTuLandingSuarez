import React from "react";
import "./../../styles/fonts.css";
import { Box, Button, Flex } from "@chakra-ui/react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box className="container">
      <img
        className="fondo"
        src="/assets/imgs/fondohero.webp"
        alt="fondo"
      />
      <img className="haven" src="/assets/imgs/haventext.png" alt="Haven" />
      <img className="somos" src="/assets/imgs/somos.png" alt="Somos" />
      <Button className="button-shop">
        <Link to="/productos">shop now.</Link>
      </Button>
    </Box>
  );
};

export default Hero;
