import React, { useState } from "react";

function ItemCount (props) {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count < props.stock ? count + 1 : count);
    };

    const handleDecrement = () => {
        if (count > 1){
            setCount(count - 1);
        }
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
    </div>
    </>

);
};


export default ItemCount;
