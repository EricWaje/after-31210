import { useState } from 'react';

const { createContext } = require('react');

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (id, cantidad) => {
        const newCart = cart.map((prod) =>
            prod.id === id
                ? { ...prod, cantidad: prod.cantidad + cantidad }
                : prod
        );

        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
