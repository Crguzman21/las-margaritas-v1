import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from 'react';
import cartContext from '../context/cartContext';

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const {title, price, description, img, category, stock, id } = props;
    const { addItem } = useContext(cartContext);

    function onSubmitCount(count){
        console.log(`Agregaste ${count} unidades al carrito`);
        addItem( {id, price, title, count, img} )
        setIsAddedToCart(true);
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
                ? <button>Ver Carrito</button>
                : <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
            }
        </div>
    </div> 
    )
}

export default ItemDetail;