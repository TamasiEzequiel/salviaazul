import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { stock } from "./listProd"
import { ViewItem } from "./ViewItem"




export const MuestreoVerMas = () => {

    let [item, setItem] = useState(null)

    const { itemId } = useParams()



     const sacoDatos = () =>  {
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 0.1000)
        })
    }


    useEffect(() => {


        sacoDatos()

            .then((resp) => {

                setItem(resp.find((elemento) => elemento.id == itemId))

            })


    }, [])

    return (

        <>
            {
                <ViewItem {...item} />
            }

        </>
    )

}