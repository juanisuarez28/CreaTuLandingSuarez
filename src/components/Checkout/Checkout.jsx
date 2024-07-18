import React, { useState } from 'react'

const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })

  return (
    <div>Checkout</div>
  )
}

export default Checkout