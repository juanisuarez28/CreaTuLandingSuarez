import React from 'react'
import Hero from '../Hero/Hero'
import { Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
        <Hero />

    </Flex>
  )
}

export default Home