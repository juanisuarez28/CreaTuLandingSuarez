import React, { useState } from 'react'

const BotonMultiuso = ({color, label, callback}) => {
    const [ background, setBackground] = useState(color);

    const handleClick = () =>{
        if(callback){
            callback()
        }

        setBackground((prevState)=> prevState==='blue' ? color: 'blue')
    }

  return (
    <button style={{background}} onClick={handleClick}>{label}</button>
  )
}

export default BotonMultiuso