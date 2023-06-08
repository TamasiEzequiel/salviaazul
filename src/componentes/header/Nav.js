import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export const Nav = () => {

    return (

        <div>
            <Logo />

            <nav className="navBar">
                <ul className="ul__menu">
                    <li className="li-desp"> <Link to='/'>INICIO</Link><hr></hr></li>
                    <li className="li-desp" ><Link to='/productos'>PRODUCTOS</Link> <img src="img\angle-small-down.svg"></img>
                        <ul className="nav-desp">
                            <li><Link to='/productos/jabones'> JABONES </Link></li>
                            <li><Link to='/productos/perfumes'>PERFUMES </Link></li>
                            <li><Link to='/productos/velas'>VELAS</Link></li>
                        </ul>
                    </li>
                    <li className="li-desp" ><Link to='/contacto'>CONTACTO</Link></li>
                </ul>


               
            </nav>

        </div>
    )

    /* COLOCAR LOS SIGUIENTES COMPONENTES
                            <li className="li-desp"> <Link to='/productos'>Productos</Link></li>        
    */
}