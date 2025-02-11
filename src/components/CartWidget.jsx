import { useContext } from 'react';
import cartContext from '../context/cartContext';


function CartWidget(){
    const context = useContext(cartContext);
    return(
        <div className='CartWidget'>
            🛒
            <span>{context.countItemsInCart()}</span>
        </div>
    );
}

export default CartWidget;