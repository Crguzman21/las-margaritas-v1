import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from 'react';
import cartContext from '../context/cartContext';
import { useNavigate } from "react-router-dom";

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const {title, price, description, img, category, stock, id } = props;
    const { addItem } = useContext(cartContext);
    const navigate = useNavigate();
    
    function onSubmitCount(count){
        addItem( {id, price, title, count, img} )
        setIsAddedToCart(true);
    }

    function goToCart(){
        navigate("/cart");
    }

    return (
    <div className="item-detail">
        <h2>{title} </h2>
        <img src={img}  alt={title} />
        <p>{category}</p>
        <p>$ {price}</p>
        <p>{description}</p>
        <span>Stock: {stock}</span>
        <div>
            {
                isAddedToCart
                ? <button onClick={goToCart}>Ver Carrito</button>
                : <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
            }
        </div>
    </div> 
    )
}

export default ItemDetail;