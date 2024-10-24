import React, { useState, useEffect } from 'react'

export const Orden = ({compras}) => {
  const [total,setTotal]= useState(0);

  useEffect(() => {
    const totalAmount = compras.reduce((previousValue, currentCompra) => {
      return previousValue + currentCompra.price;
    }, 0);
    setTotal(totalAmount);
  }, [compras]);

  return (
    <div>
    {compras.map((compra, index) => (
            //<Orden key={index} compra={compra} />
            <h2 key={index}> {compra.name} - ${compra.price}</h2>
        ))}
    <br></br>
    <h2 className='text-1xl font-bold'> Total a pagar: ${total}</h2>
    </div>
  )
}
