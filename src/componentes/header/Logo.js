import { Link } from "react-router-dom";

export const Logo = () => {

    return (

        <div className="logo" >

            <Link to='/'>
               
                <img className="imgLogo" src="..\img\logo.png" />
                
            </Link>

        </div>

    )
}