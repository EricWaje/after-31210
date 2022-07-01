import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        <div className="count">
            <div className="buttons">
                <button onClick={add}>+</button>
                <p>{count}</p>
                <button onClick={substract}>-</button>
            </div>
            <div className="add-cart">
                <button>Add to Cart!</button>
            </div>
        </div>
    );
};

export default ItemCount;
