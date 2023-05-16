import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ListadoProd } from "./ListadoProd"
import { pedirDatos } from "./PedirDatos" //FUNCION
import { Cargando } from "../cargando/Cargando"




export const MuestreoProductos = () => {

    let [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(false)

    const { catId } = useParams()

    


    useEffect(() => {

        setLoading(true)



        pedirDatos()
            .then((resp) => {
                if (catId) {
                    setProductos(resp.filter((el) => el.categoria === catId))
                } else {
                    setProductos(resp)
                }

            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (

        <>


            {


                loading ?  <Cargando/> : <ListadoProd productos={productos} />
            }

        </>
    )

}