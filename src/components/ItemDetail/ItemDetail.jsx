import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Image, Text, Divider, Box, Flex } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Swal from 'sweetalert2'
import './ItemDetail.css'

const product = {
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ItemDetail = ({nombre, descripcion, precio, id, img, stock}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const [cantidad, setCantidad]= useState(0)
  const { addItem } = useContext(Context) //me traigo la funcion addItem de CartContext 


  const onAdd = (quantity)=>{
    const item = {
      id, nombre, precio, img
    }
    setCantidad(quantity)
    addItem(item, quantity)

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${quantity} ${nombre} al carrito`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <Box w={'80%'}>
    <div className="bg-white">
    <div className="pt-6">
      {/* Image gallery */}
        <Flex display={'flex'} align={'center'} justify={'center'} w={'100%'} className="hidden overflow-hidden rounded-lg lg:block">
          <Image
            id='imgproducto'
            src={img}
            w={'25%'}
            className="object-cover object-center"
          />
        </Flex>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{nombre}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Información del producto</h2>
          <p className="text-3xl tracking-tight text-gray-900">${precio}</p>

          <form className="mt-10">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>

              <fieldset aria-label="Choose a color" className="mt-4">
                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <Radio
                      key={color.name}
                      value={color}
                      aria-label={color.name}
                      className={classNames(
                        color.selectedClass,
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          color.class,
                          'h-8 w-8 rounded-full border border-black border-opacity-10',
                        )}
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  {product.sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={classNames(
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                      )}
                    >
                      <span>{size.name}</span>
                      {size.inStock ? (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          >
                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                          </svg>
                        </span>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            <ButtonGroup spacing="2">
                {
                  cantidad === 0 ?
                  <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
                  :
                  <Link to='/cart'>
                    <Button mt={'1.5rem'} variant='solid'>
                      ver carrito.
                    </Button>
                  </Link>

                }
            </ButtonGroup>
            <ToastContainer />
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">descripción.</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{descripcion}</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">detalles.</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Box>
  )
}

export default ItemDetail