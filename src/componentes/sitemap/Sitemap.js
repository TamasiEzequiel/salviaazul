import { Link } from "react-router-dom"


export const Sitemap = () => {

    return (

        <div>


            <div className="siteMap">
                <h3>Mapa de sitio</h3>
                <ul className="ul_site">
                    <li className="li-site"> <Link to='/productos'>Productos</Link></li>
                    <li className="li-site"><Link to='/nosotros'>Nosotros</Link></li>
                    <li className="li-site"><Link to='/contacto'>Contacto</Link></li>
                </ul>

            </div>
        </div>
    )

  
}