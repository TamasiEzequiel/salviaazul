import { Link } from "react-router-dom";

export const LogoFoo = () => {

    return (

        <div className="logoFoo" >

            <Link to='/'>

                <img className="imgLogoFoo" src="..\img\logo.png"/>
            </Link>

        </div>

    )
}