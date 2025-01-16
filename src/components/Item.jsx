import Button from "./Button";
import "./Item.css";
import ItemCount from "./ItemCount";
function Item(props) {
    const {price, title, text, img, stock } = props;
    return (
        <div className="card">
            <img src={img} width="150" height="150" alt="Imagen del Producto" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <div>
                    <p className="card-price">{price}</p>
                </div>
                <ItemCount stock={stock}/>
                <Button>Ver Detalles</Button>
            </div>
        </div>
    );
}

export default Item;