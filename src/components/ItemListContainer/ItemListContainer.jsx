import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProds } from '../../mock/products';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProds()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;

/* useEffect(() => {
    getProds()
        .then((res) => {
            setProducts(res);
        })
        .catch((error) => {
            console.log(error);
        });
}, []); */
