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
            const response = await getAsyncItemById(id);
            setProduct(response)
        }
        getItemData()
    }, [id]);

    if( product  )
        return <ItemDetail {...product} />

    else
        return <Loader/>
}

export default ItemDetailContainer;