import React, { useEffect, useState } from 'react'
import { getOrders } from '../services/orderService'

export const Orders = () => {
    
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const fetchOrders = async () => {
            try{
                const data = await getOrders();
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
            
        };
        fetchOrders();
    }, [orders]);

    return (
        <div className='bg-gray-100'>
        <br />
        <h1 className=' text-center font-bold text-3xl'>Historial de ventas</h1>
        <br />
        

        <div className='bg-gray-100 grid grid-cols-5 items-top justify-center gap-x-1 gap-y-2 '>
            {orders.map((order) => (
                            <div key={order.id} className='bg-gray-300 p-5 rounded-lg flex flex-col justify-center items-center'>
                                <h3 className='text-xl font-bold'>Orden: {order.id}</h3>
                                {order.items.map((item, itemIndex) => (
                                    <p key={itemIndex}>
                                        {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                                    </p>
                                ))}
                                <h4>Forma de pago: {order.payment}</h4>
                                <h4>Fecha: {new Date(order.timestamp.seconds * 1000).toLocaleString()}</h4>
                                <h3 className='text-lg font-bold'>Total a pagar: ${order.total}</h3>
                                <br />
                            </div>
                        ))}
        </div>
        </div>
    )
}


