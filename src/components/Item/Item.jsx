import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.image} alt="producto" />
            <section>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <Link className="detalle" to={`/detail/${item.id}`}>
                    Ver detalle
                </Link>
            </section>
        </div>
    );
};

export default Item;
