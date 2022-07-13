import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);
    return <div>Soy el carrito</div>;
};

export default Cart;
