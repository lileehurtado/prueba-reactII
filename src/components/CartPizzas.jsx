import React, { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext';

const CartPizzas = () => {

    const { cart, increaseCount, decreaseCount, totalCart, localCurrency } = useContext(PizzaContext);

    return (
        <div>
            <table className='table table-responsive'>
                    <tbody className='align-middle'>
                        {cart.map((pizza, index) => (
                            <tr key={index}>
                            <td>
                                <img 
                                    src={pizza.img} 
                                    alt={pizza.name} 
                                    width={100}
                                />
                            </td>
                            <td className="w-75 text-capitalize">{pizza.name}</td>
                            <td>{localCurrency(pizza.count * pizza.price)}</td>
                            <td>
                                <button 
                                    onClick={() => decreaseCount(index)}
                                    className='btn btn-danger'
                                >-</button>
                            </td>
                            <td className='fw-bold'>{pizza.count}</td>
                            <td>
                                <button 
                                    onClick={() => increaseCount(index)}
                                    className='btn btn-primary'
                                >+</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="5" className="total-pago">
                            Total: {localCurrency(totalCart)}
                            </td>
                        </tr>
                        </tfoot>
                </table>
                <button 
                    onClick={() => alert('Vas a pagar un total de ' + localCurrency(totalCart) + '. ¡Disfruta tus pizzas y gracias por tu compra!')}
                    className="btn float-start bg-success btn-pagar ms-2">Ir a pagar</button>
            </div>
        )
    }
    
    export default CartPizzas                            