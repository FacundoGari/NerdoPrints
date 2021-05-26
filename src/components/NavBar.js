import React from 'react';
import Logo from './extra/Logo';
import CartWidget from './CartWidget';
import NavBarItem from './NavBarItem';

import './styles/NavBar.css';


const NavBar = () => {
    return(
        <header>
            <nav>
                <li>
                    <a href='/'>
                        <Logo/>
                    </a>
                </li>
                <NavBarItem name='Home' url='/'/>
                <NavBarItem name='Productos' url='/'/>
                <NavBarItem name='Contacto' url='/'/>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;