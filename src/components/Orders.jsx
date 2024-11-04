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
    }, []);

    return (
        <div className='bg-gray-100 flex grid-cols-5 items-top justify-center space-x-1 '>
            {orders.map((order, index) => (
                            <div key={index} className='bg-gray-300 p-5 rounded-lg flex flex-col justify-center items-center'>
                                <h3 className='text-xl font-bold'>Orden {index + 1}</h3>
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
    )
}


