import React, {useEffect, useState} from 'react';
import Item from './extra/Item';
import productList from '../data/productos.js';
import './styles/ItemList.css';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000)
    })

    const getProductsFromDataBase = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch(error) {
            alert('Los productos no estan disponibles en este momento')
        }
    }

    useEffect(() => {
        getProductsFromDataBase();
    }, [])
    
    return (
        <div className='product-list-container'>
            {
                products.lenght ?
                <>
                    {
                        products.map((product) => {
                            return <div key={product.ID}>
                                <Item
                                    image = {product.image}
                                    name = {product.name}
                                    price = {product.price}
                                    stock = {product.stock}
                                />
                            </div>
                        })
                    }
                </>
                :
                <p>Cargando productos</p>
                
            }
        </div>
    )
}


export default ItemList;