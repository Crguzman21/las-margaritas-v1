import { useEffect, useState } from "react";
import {getAsyncDataById} from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState({})

    useEffect ( () => {
        async function getItemData() {
            const response = await getAsyncDataById(5)
            setItemInfo(response)
        }
        getItemData()
    }, [])

    console.log(itemInfo);
    return <ItemDetail {...itemInfo} />
}

export default ItemDetailContainer