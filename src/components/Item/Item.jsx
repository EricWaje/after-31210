import React from 'react';

const Item = ({ item }) => {
    return (
        <div
            style={{
                margin: '10px 20px',
                border: '2px solid black',
                width: '40%',
            }}
        >
            <img width="200px" src={item.image} alt="producto" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <button>Ver detalle</button>
        </div>
    );
};

export default Item;
