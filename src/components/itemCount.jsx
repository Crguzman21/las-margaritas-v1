import  { useState } from "react";

function ItemCount (props) {
    const [count, setCount] = useState(1);
    const { onSubmitCount } = props;

    const handleIncrement = () => {
        if(count === props.max) return;
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
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

            <div>
                <button onClick={ () =>{props.onSubmitCount(count)}}>Enviar</button>
            </div>
        </div> 
    </>

);
};


export default ItemCount;
