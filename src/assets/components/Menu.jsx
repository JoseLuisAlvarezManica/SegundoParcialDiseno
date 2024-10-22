import React, {useState, useEffect} from 'react'
import { Orden } from './Orden';

export const Menu = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [compras, setCompras] = useState([]);
    const [pago, setPago] = useState(false);

    const AgregarCompra = (item) => {
        const newitem = {name:item.name, price:item.price}
        setCompras((anteriores) => [...anteriores, newitem])
    }

    const Pagar = () => {
        setCompras([])
        setPago(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://api-menu-9b5g.onrender.com/menu');
                const result = await response.json();
                console.log(result);
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching data', error);
                setLoading(false);
            }
    
        }
    
        fetchData();
      }, []); //Este hook solo se ejecutara una vez

  return (
    <div className='min-h-screen bg-gray-400 flex grid-cols-3 items-top justify-center'>
        <div className='bg-white shadow-lg round-lg p-6 max-w-xl w-full'>
            <div className=''>
                <h1 className='text-2xl font-bold text-center mb-4'>Menu</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className='grid grid-cols-1 gap-4'>
                        {data.map((item, index) => {
                            return (
                                <li key={index} className='bg-gray-500 p-4 rounded-lg flex flex-col justify-center items-center '>
                                    <h2 className='text-lg font-bold text-center mt-2'>{item.name} - ${item.price}</h2>
                                    <button className='border-2 shadow-lg rounded-md bg-white border-black font-bold' onClick={() => {
                                        AgregarCompra(item);
                                        console.log(item)
            }}                          >Agregar</button>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )}
            </div>
        </div>

        <div className='bg-white shadow-lg round-lg p-6 max-w-xl w-full flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-center mb-4'>Orden Actual</h1>
        {compras.map((compra, index) => (
            <Orden key={index} name={compra.name} precio={compra.price} />
        ))}
        <button className='border-2 shadow-lg bg-white rounded-md border-black font-bold' onClick={() => Pagar()}>
            Pagar
        </button>
        </div>

        <div className='bg-white shadow-lg round-lg p-6 max-w-xl w-full'>
            <h1 className='text-2xl font-bold text-center mb-4'>Pago</h1>
            {pago ? <div>
                <h1 className='text-2xl font-bold text-center mb-4'>Pago realizado</h1>
                <h1 className='text-1xl text-center mb-4'>Gracias por su compra</h1>
                </div> :
              <h1 className='text-2xl text-center mb-4'>Pago por realizar</h1>}
              
        </div>
    </div>


    
    
  )
}
