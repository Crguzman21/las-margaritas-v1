import { useEffect, useState } from "react";
import {getAsyncItemById} from "../data/database";
import ItemDetail from "./ItemDetail";
import  {useParams} from "react-router-dom";
import Loader from "./Loader";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const { id } = useParams();

    useEffect ( () => {
        async function getItemData() {
            const data = await getAsyncItemById(id);
            setProduct(data)
        }
        getItemData()
    }, [id]);

    if( product  )
        return <ItemDetail {...product} id={id} />

    else
        return <Loader/>
}

export default ItemDetailContainer;