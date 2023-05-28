import { MuestreoProductos } from "./MuestreoProd"



export const Productos = () => {

    return (

        <div className="containerProductos">
            
            <MuestreoProductos/>
         
        </div>
    )

    
}
/*Orden de archivos
    PRODUCTOS (Renderizado final)
       |
    MUESTREO PRODUCTOS (es el q maneja la info con los estados, recibe un catId para filtrado por params, y llama a la api (json)( TIENE 2 ESTADOS, UNO DE CARGA Y OTRO DE ACTUALIZACIOND D PRODUCTOS) finalmente en el return si el loading es false muestra la info recibida de LISTADO PROD y actualiza el estado PRODUCTOS con el recibimiento del array de "productos" proveniente de LISTADO PROD
       | 
    LISTADO PROD (hace el mapeo recibiendo por props un array "productos")
       |
    CARDITEM (maquetado visual de producto) recibe por props las propiedades del json
*/