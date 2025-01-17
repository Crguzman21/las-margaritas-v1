import products from "./data";

function getAsyncData() {

    const promiseData = new Promise((resolve, reject) =>{

        const error = false;

        setTimeout(() => {
            if(error) reject("Error en la conexion");
                resolve(products)
        }, 2000)
    })

    return promiseData;
}

export function getAsyncDataById(itemID) {

    const promiseData = new Promise((resolve) =>{

    
        setTimeout(() => {
            const requestedProduct = products.find((item) => item.id === Number(itemID));
            resolve(requestedProduct);
        }, 500)
        })
    
        return promiseData;
    }

export function getAsyncDataByCategory(catID) {

    const promiseData = new Promise((resolve) =>{

    
        setTimeout(() => {
            const requestedProduct = products.filter((item) => item.category.toLowerCase() === catID.toLowerCase());
            resolve(requestedProduct);
        }, 500)
        })
    
        return promiseData;
    }
export default getAsyncData;
