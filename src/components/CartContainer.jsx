import { useContext, useState } from 'react';
import cartContext from '../context/cartContext';
import "./CartContainer.css";
import { createBuyOrder } from '../data/database';



function CartContainer() {

    const [userData, setUserData] = useState({
        username: "",
        phone: "",
        urbanization: "",
        apartment: "",
        paymentMethod: "",
    });
    
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }
    
    const  { cartItems, removeItem, getTotalPrice} = useContext(cartContext);

    async function handleCheckout(evt){
        evt.preventDefault();
        setError(null);
        try{
            const orderData ={
                buyer: {
                    username: userData.username,
                    phone: userData.phone,
                    urbanization: userData.urbanization,
                    apartment: userData.apartment,
                    paymentMethod: userData.paymentMethod,
                },
                items: cartItems,
                total: getTotalPrice(),
                date: new Date()
        };

        const newOrderID = await createBuyOrder(orderData);
        setOrderId(newOrderID);
    } catch (error) {
        setError("Hubo un error al registrar la compra, Intetalo de Nuevo.");
    }
}

    return (
        <>
            <h1>Carrito de Compras</h1>
            <div className = "cart-container">
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
            <form>
                <h2>Completa tus datos para completar la compra</h2>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
                    <input name="username" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Celular</label>
                    <input name="phone" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Urbanizacion</label>
                    <input name="urbanization" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Apartamento</label>
                    <input name="apartment" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Metodo De Pago</label>
                    <select name="paymentMethod">
                        <option value="">Seleccione un metodo</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="transferencia">Transferencia</option>
                    </select>
                </div>

                <button
                    disabled={
                    !(
                        userData.username !== "" &&
                        userData.surname !== "" &&
                        userData.age !== ""
                    )
                    }
                    onClick={handleCheckout}
                >
                    Realizar Compra
                </button>
            </form>

            {orderId && (
                    <div className="order-confirmation">
                        <p>¡Compra realizada con éxito!. Gracias Por Confiar En Nuestro Servicio</p>
                        <p>Tu número de orden es: {orderId}</p>
                        
                    </div>
                )}

                {error && (
                    <div className="error-message">
                        <p style={{ color: "red" }}>{error}</p>
                    </div>
                )}

        </>
    );
}

export default CartContainer