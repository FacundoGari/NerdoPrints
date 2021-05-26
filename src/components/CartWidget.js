import React from 'react';
import cart from './assets/images/shopping-cart.png';


const CartWidget = () => {
    return (
        <>
            <div className='cart-container'>
                <img src={cart} alt='carrito de compras'/>
            </div>
        </>
    )
}

export default CartWidget;