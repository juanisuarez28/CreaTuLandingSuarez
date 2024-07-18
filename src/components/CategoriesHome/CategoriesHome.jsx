import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesHome = () => {
    const callouts = [
        {
          name: 'remeras',
          description: 'comodidad y tendencia.',
          imageSrc: 'https://images.urbndata.com/is/image/UrbanOutfitters/93140697_030_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=960',
          imageAlt: 'remeras category',
          href: '/categorias/remeras',
        },
        {
          name: 'pantalones',
          description: 'versátiles y elegantes.',
          imageSrc: 'https://images.urbndata.com/is/image/UrbanOutfitters/92759513_107_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=960',
          imageAlt: 'pantalones category',
          href: '/categorias/pantalones',
        },
        {
          name: 'hoodies',
          description: 'funcionalidad y tendencia.',
          imageSrc: 'https://images.urbndata.com/is/image/UrbanOutfitters/92532373_004_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=960',
          imageAlt: 'hoodies category',
          href: '/categorias/hoodies'
        },
      ]

  return (
    <Box w={'100%'}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">categorias.</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Box>
  )
}

export default CategoriesHome