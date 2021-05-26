import React from 'react';
import './styles/slider.css';
//En proceso, voy hacer un slider con fotos de productos

const Slider = () => {
    return(
        <>
            <div ClassName='slider'>
                <ul>
                    <li>
                        <img src='./assets/icon/print.jpg' alt='foto 1 slider'/>
                    </li>
                    <li>
                        <img src='./assets/images/print2.jpg' alt='foto 1 slider'/>
                    </li>
                    <li>
                        <img src='./assets/images/print3.jpg' alt='foto 1 slider'/>
                    </li>
                    <li>
                        <img src='./assets/images/print4.jpg' alt='foto 1 slider'/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Slider;