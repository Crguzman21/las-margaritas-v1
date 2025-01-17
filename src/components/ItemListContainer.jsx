import getAsyncData, { getAsyncDataByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { catid } = useParams();

    useEffect(() => {
        if (catid !== undefined) {
            // Obtener productos filtrados por categoría
            getAsyncDataByCategory(catid)
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        } else {
            // Obtener todos los productos
            getAsyncData()
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        }
    }, [catid]); // Dependencia para ejecutar el efecto cuando cambie catid

    return (
        <div>
            <ItemList greeting={props.greeting} products={products} />
        </div>
    );
}

export default ItemListContainer;
