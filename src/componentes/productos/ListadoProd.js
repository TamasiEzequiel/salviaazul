import { CardItem } from "./CardItem"



export const ListadoProd = ({ productos }) => {

    return (

        <div className="listadoProd">
          
            
            {productos.map((prod) => <CardItem key={prod.id} {...prod} />)}
        </div>

    )

}