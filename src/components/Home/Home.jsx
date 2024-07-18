import React from 'react'
import Hero from '../Hero/Hero'
import { Flex } from '@chakra-ui/react'
import PromoSection from '../PromoSection/PromoSection'
import CategoriesHome from '../CategoriesHome/CategoriesHome'

const Home = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
        <Hero />
        <PromoSection/>
        <CategoriesHome/>
    </Flex>
  )
}

export default Home