import { useEffect, useState } from "react";
import {getAsyncDataById} from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import  {useParams} from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect ( () => {
        async function getItemData() {
            const response = await getAsyncDataById(id);
            setProduct(response)
        }
        getItemData()
    }, [id]);

    return <ItemDetail {...product} />
}

export default ItemDetailContainer;