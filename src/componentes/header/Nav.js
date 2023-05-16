import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export const Nav = () => {

    return (

        <div>
            
            <div className="navBar">
                <nav>
                    <ul className="ul__menu">
                        <li className="li-desp"> <Link to='/'>Inicio</Link><hr></hr></li>
                        <li className="li-desp"> <Link to='/productos'>Productos</Link></li>
                        <Logo />
                        <li className="li-desp" ><Link to='/nosotros'>Nosotros</Link></li>
                        <li className="li-desp" ><Link to='/contacto'>Contacto</Link></li>
                    </ul>

                </nav>
            </div>
        </div>
    )

    /* COLOCAR LOS SIGUIENTES COMPONENTES
    
    - LOGO
    - LISTA
    - REDES??
        
    */
}