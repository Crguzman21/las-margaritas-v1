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

export function getAsyncDataById(id) {

    const promiseData = new Promise((resolve, reject) =>{
    
        const error = false;
    
        setTimeout(() => {
            if(error) reject("Error en la conexion");
                const itemRequested = products.find(item => item.id === id);
                resolve(itemRequested)
        }, 2000)
        })
    
        return promiseData;
    }
export default getAsyncData;
