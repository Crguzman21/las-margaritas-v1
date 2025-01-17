import React from 'react';
import CartWidget from './CartWidget';
import { NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <h1>Salsamentaria Las Margaritas</h1>
                </div>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>

                    <li>
                        <NavLink to="/item">Detalle</NavLink>
                    </li>
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