import { useEffect, useState } from "react";
import getAsyncData from "../data/getAsyncData";

function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState({})

    useEffect ( () => {
        async function getItemData() {
            const response = await getAsyncData()
            setItemInfo(response[0])
        }
        getItemData()
    }, [])

    console.log(itemInfo);
    return (
    <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer