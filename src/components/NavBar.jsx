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
                        <NavLink to="/category/abarrotes">Abarrotes</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/category/legumbres">Legumbre</NavLink>
                    </li>

                    <li>
                        <NavLink to="/category/lacteos">Lacteos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/category/aseo">Aseo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Carrito</NavLink>
                    </li>

                </ul>
            <CartWidget Link to="/cart"/>
            </nav>
        </>
    );
}

export default Navbar;