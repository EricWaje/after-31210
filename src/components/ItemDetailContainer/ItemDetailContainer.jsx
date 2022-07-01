import React, { useState, useEffect } from 'react';
import { getProd } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProd()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    //console.log(product);
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
