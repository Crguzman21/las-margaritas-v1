import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <>
            <nav>
                <h1>Salsamentaria Las Margaritas</h1>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Abarrotes</a></li>
                    <li><a>Legumbre</a></li>
                    <li><a>Lacteos</a></li>
                    <li><a>Aseo</a></li>
                </ul>
            <CartWidget />
            </nav>
        </>
    );
}

export default Navbar;