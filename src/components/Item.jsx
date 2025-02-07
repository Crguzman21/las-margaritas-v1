import Button from "./Button";
import "./Item.css";
import { Link } from "react-router-dom";
import { memo } from "react";

function Item(props) {
    const {price, title, description, img, id, stock } = props;
    return (
        <div className="card">
            <img src={img} width="150" height="150" alt="Imagen del Producto" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <div>
                    <p className="card-price">{price}</p>
                </div>
                <Link to={`/item/${id}`}>
                    <Button>Ver Detalle</Button>
                </Link> 
            </div>
        </div>
    );
}

export default memo(Item, (prevProps, newProps) =>{
    return prevProps.id === newProps.id;
});