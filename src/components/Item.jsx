import Button from "./Button";
import "./item.css";
function Item(props) {
    const {price, title, text, img } = props;
    return (
        <div className="card">
            <img src={img} width="150" height="150" alt="Imagen del Producto" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <div>
                    <p className="card-price">{price}</p>
                </div>
                <Button>Agregar Al carrito</Button>
            </div>
        </div>
    );
}

export default Item;