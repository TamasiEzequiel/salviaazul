import { Link } from "react-router-dom";

export const Logo = () => {

    return (

        <div className="logo" >

            <Link to='/'>
               
                <img className="imgLogo" src="..\img\logoconfondo.png" />
                
            </Link>

        </div>

    )
}