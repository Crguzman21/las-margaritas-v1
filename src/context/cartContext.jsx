import { createContext, useState } from "react";

const cartContext = createContext( { cartItems: []});
export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState([ 
        {item: 1, count: 20}, 
        {item: 2, count:4}
    ]);

    function addItem({price, id, title, img, count}){

        const copyCartItems = [...cartItems];
        copyCartItems.push({
            id: id,
            title: title,
            img: img,
            count: count,
            price: price,
        });
        setCartItems(copyCartItems);
    }

    function countItemsInCart(){
        let total = 0;
        cartItems.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    return <cartContext.Provider 
            value={{
                cartItems,
                countItemsInCart,
                addItem,
                name: "Carrito de Compras",
                }}
            >
        {props.children}
    </cartContext.Provider>
}

export default cartContext;
