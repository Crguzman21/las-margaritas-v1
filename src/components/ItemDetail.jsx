import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
    const {title, price, description, img, category, stock } = props;
    return (
    <div className="item-detail">
        <h2>{title} </h2>
        <img src={img}  alt={title} />
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
        <ItemCount stock={stock}/>
        <button className="add-to-cart-btn"> Agregar Al Carrito</button>
    </div>
    )
}

export default ItemDetail;