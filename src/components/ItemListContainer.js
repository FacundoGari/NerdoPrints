import React from 'react';
import ItemList from './ItemList';


import "./styles/ItemListContainer.css";

const ItemListContainer = () => {
    return(
        <div className='item-list-container'>
            <h2>Productos Nuevos</h2>
            <p>Conoce nuestros productos</p>
            <ItemList/>
        </div> 
    )
}

export default ItemListContainer;