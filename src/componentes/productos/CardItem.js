import { Link } from "react-router-dom"


export const CardItem = ({ id, nombre, precio, img }) => {

    return (

        
        <div className="CardItem">
            <img src={img} />
            <h3 id="cardTitle">{nombre} </h3>
            <p>{"$" + precio}  <Link to={`/detail/${id}`}>
                <button className="btn-vermas"> VER MAS </button>
            </Link></p>
           
        </div>
        
    )
}