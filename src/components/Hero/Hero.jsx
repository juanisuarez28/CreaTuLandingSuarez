import React from 'react'
import './../../styles/fonts.css';
import { Box, Button, Flex } from '@chakra-ui/react';
import './Hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <Box className='container' >
        <img className="fondo" src=" ../../../src/assets/imgs/fondohero.webp" alt="Logo ComeCabron"/>
        <img className='haven' src=' ../../../src/assets/imgs/haventext.png'></img>
        <img className='somos' src=' ../../../src/assets/imgs/somos.png'></img>
        <Button className='button-shop'><Link to='/productos'>shop now.</Link></Button>
    </Box>
  )
}

export default Hero 