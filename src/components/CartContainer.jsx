import { useContext } from 'react';
import cartContext from '../context/cartContext';
import "./CartContainer.css";



function CartContainer() {
    const  { cartItems, removeItem} = useContext(cartContext);


    return (
        <div className = "cart-container">
            <h1>Carrito de Compras</h1>
            {cartItems.map( (item) => (
                <>
                    <div key={item.id} className="cart-item">
                        <h3>{item.title}</h3>
                        <img src={item.img} width="250" height="250" alt="Imagen del Producto" />
                        <p>Precio: ${item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <button className='btn-remove-item'onClick={ () => removeItem(item.id)}>Eliminar</button>
                    </div>
                    <hr/>
                </>
            ))}
        </div>
    )
}

export default CartContainer