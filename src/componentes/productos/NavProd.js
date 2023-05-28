import { Link } from "react-router-dom"

export const NavProd = () => {

    return (

        <div>

            <div className="navProd">

                <ul className="nav-desp">
                    <li><Link to='/productos/jabones'>Jabones </Link></li>
                    <li><Link to='/productos/perfumes'>Perfumes </Link></li>
                    <li><Link to='/productos/velas'>Velas</Link></li>
                    
                </ul>
            </div>
        </div>
    )

    
}