import { Link } from "react-router-dom";
import { CartWidget } from "../productos/CartWidget";

export const Logo = () => {

    return (

        <div className="logo" >
             <CartWidget/>
            
           
            <Link to='/'>
               
                <img className="imgLogo" src="..\img\logo.png" />
                
            </Link>

        </div>

    )
}