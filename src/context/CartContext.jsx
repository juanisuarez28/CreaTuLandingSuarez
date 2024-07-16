import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [ cart, setCart ]= useState([])

    const addItem = (productToAdd, quantity)=>{
        const newItem = {
            ...productToAdd, 
            quantity
        }
        const isInCart= cart.some((prod)=> prod.id===newItem.id)  //si el que se quiere agregar ya esta en el carrito

        if(isInCart){
            const updatedCart= cart.map((prod) =>
                prod.id === newItem.id ? {...prod, quantity: prod.quantity + quantity} : prod //actualizo quantity del producto ya agregado
            )
            setCart(updatedCart) 
        }else{
            setCart([...cart, newItem]) // y si no, simplemente lo agrego
        }
    }

    const removeItem = (id)=>{
        const updatedCart = cart.filter((prod)=> prod.id !== id) //selecciono todos menos el que coincida
        setCart(updatedCart)
    }

    const clearCart= ()=> {
        setCart([]) //vacia carrito
    }

    const getQuantity = ()=>{
        let quantity= 0
        cart.forEach((prod)=>{
            quantity= quantity + prod.quantity
        })

        return quantity
    }

    const getTotalPrice = ()=>{
        const total = cart.reduce((actual, item)=> actual + item.precio * item.quantity,0)
        return total
    }


  return (
    <Context.Provider
    value={{
        cart,
        addItem, //datos que quiero proveer
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice
    }}>
        {children}
    </Context.Provider>
  )
}

export default Context