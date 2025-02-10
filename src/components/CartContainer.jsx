import { useContext } from 'react';
import cartContext from '../context/cartContext';
import "./CartContainer.css";
import { createBuyOrder } from '../data/database';



function CartContainer() {
    const  { cartItems, removeItem, getTotalPrice} = useContext(cartContext);

    function handleCheckout(){
        const orderData ={
            buyer: {
                name: "John Doe",
                email: "v5Y3t@example.com",
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date()
        }

        const newOrderID = createBuyOrder(orderData);
        console.log("Compra Realizada", newOrderID);
    }

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
            <button onClick={handleCheckout}>Comprar</button>
        </div>
    )
}

export default CartContainer