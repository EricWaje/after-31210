import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h2>After</h2>
            <ul>
                <li>Home</li>
                <li>Remeras</li>
                <li>Camisas</li>
                <li>Gorras</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
