import { CardItem } from "./CardItem"



export const ListadoProd = ({ productos }) => {

    return (

        <div className="ListadoProd">
          
            {productos.map((prod) => <CardItem key={prod.id} {...prod} />)}
        </div>

    )

}