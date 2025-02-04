import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { useContext } from 'react';
import cartContext from '../context/cartContext';

function ItemDetail(props) {
    const {title, price, description, img, category, stock, id } = props;
    const { addItem } = useContext(cartContext);

    function onSubmitCount(count){
        console.log(`Agregaste ${count} unidades al carrito`);
        addItem( {id, price, title, count, img} )
    }
    return (
    <div className="item-detail">
        <h2>{title} </h2>
        <img src={img}  alt={title} />
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
        <div>
            <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
        </div>
    </div> 
    )
}

export default ItemDetail;