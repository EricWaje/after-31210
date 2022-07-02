import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/remeras',
        name: 'Remeras',
    },
    {
        id: 3,
        path: '/category/camisas',
        name: 'Camisas',
    },
    {
        id: 4,
        path: '/category/gorras',
        name: 'Gorras',
    },
];

const Navbar = () => {
    return (
        <nav>
            <h2>After</h2>
            <ul>
                {categories.map((category) => (
                    <Link to={category.path} key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
