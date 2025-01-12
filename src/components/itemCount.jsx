import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
    };

    const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
    if (onAdd) onAdd(count);
    };

return (
    <>
        <div className='item-count'>
        <button onClick={handleDecrement} style={{ margin: "0 5px" }}>
        ➖
        </button>
        <span>{count}</span>
        <button onClick={handleIncrement} style={{ margin: "0 5px" }}>
        ➕
        </button>
        <button onClick={handleAddToCart} style={{ margin: "0 5px" }}>
        Agregar al carrito
        </button>
    </div>
    </>

);
};


export default ItemCount;
