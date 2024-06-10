import React from 'react'

const BotonDinamico = ({texto, clase}) => {
    const handleClick = ()=>{
        alert("CLickeaste el boton dinamico")
    }

  return (
    <button className={clase} onClick={handleClick}>{texto}</button>
  )
}

export default BotonDinamico