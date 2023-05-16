import { stock } from "./listProd"

export const pedirDatos = () =>  {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2500)
    })
}

//TENER EN CUENTA Q ES UNA FUNCION Y NO UN COMPONENTE

//PARA USAR CIN UN JSON TENGO QUE HACER UN FETCH Y THEN EN LA PARTE DE RESOLVE (DOND ESTA EL STOCK)