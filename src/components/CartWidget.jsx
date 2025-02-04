import React from 'react';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


function CartWidget(){
    const context = useContext(cartContext);
    console.log("Context---->",context);
    return(
        <div className='CartWidget'>
            🛒
            <span>{context.countItemsInCart()}</span>
        </div>
    );
}

export default CartWidget;