import FlexContainer from "./FlexContainer";
import CardProduct from "./CardProduct";
import getAsyncData from "../data/getAsyncData";
import { useState } from "react";

function ItemListContainer(props) {

    const [products, setProducts] = useState([]);

    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise.then((respuesta) => setProducts(respuesta));
    const list = products.map((prod) => (
        <CardProduct 
            key={prod.id}
            title={prod.title}
            price={prod.price}
            text={prod.category}
            img={prod.img}
        />
    ));

    return (
    <>
        <div>
        <h2>{props.greeting}</h2>
        </div>
        <FlexContainer>{list}</FlexContainer>
    </>
    )
}

export default ItemListContainer;