import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
    const {title, price, description, img, category, stock } = props;

    function onSubmitCount(count){
        console.log(`Agregaste ${count} unidades al carrito`);
    }
    return (
    <div className="item-detail">
        <h2>{title} </h2>
        <img src={img}  alt={title} />
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
        <button className="add-to-cart-btn"> Agregar Al Carrito</button>

        <div>
            <ItemCount onSubmitCount={onSubmitCount} max={stock}/>
        </div>
    </div>
    )
}

export default ItemDetail;